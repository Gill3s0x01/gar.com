import { useEffect, useState } from 'react';
import socketIo from 'socket.io-client';
import { AiOutlineFileDone } from 'react-icons/ai';
import { BiTimer } from 'react-icons/bi';
import { GiCampCookingPot } from 'react-icons/gi';
import { Order } from '../../types/Order';
import { api } from '../../utils/api';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

export function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const socket = socketIo('http://localhost:8080', {
      transports: ['websocket'],
    });

    socket.on('orders@new', (order) => {
      setOrders((prevState) => prevState.concat(order));
    });
  }, []);

  useEffect(() => {
    api.get('/orders').then(({ data }) => {
      setOrders(data);
    });
  }, [orders]);

  const waiting = orders.filter((orders) => orders.status === 'WAITING');
  const inProduction = orders.filter(
    (orders) => orders.status === 'IN_PRODUCTION'
  );
  const completed = orders.filter((orders) => orders.status === 'COMPLETED');

  function handleCancelOrder(orderId: string) {
    setOrders((prevState) =>
      prevState.filter((order) => order._id !== orderId)
    );
  }

  function handleOrderStatusChange(orderId: string, status: Order['status']) {
    setOrders((prevState) =>
      prevState.map((order) =>
        order._id === orderId ? { ...order, status } : order
      )
    );
  }

  return (
    <Container>
      <OrdersBoard
        orders={waiting}
        icon={<BiTimer />}
        title="Fila de espera"
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
      <OrdersBoard
        orders={inProduction}
        icon={<GiCampCookingPot />}
        title="Em preparação"
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
      <OrdersBoard
        orders={completed}
        icon={<AiOutlineFileDone />}
        title="Pedido pronto"
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
    </Container>
  );
}
