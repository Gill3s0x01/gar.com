import { Board, BoardHeader, OrderContainer } from './styles';
import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal';
import { useState } from 'react';

interface OrdersBoardProps {
  icon: any;
  title: string;
  orders: Order[];
}

export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);

  function handleOpenOrder(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseOrder() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  return (
    <Board>
      <OrderModal
        order={selectedOrder}
        visible={isModalVisible}
        onClose={handleCloseOrder}
      />
      <BoardHeader>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </BoardHeader>
      {orders.length > 0 && (
        <OrderContainer>
          {orders.map((order) => (
            <button
              type="button"
              key={order._id}
              onClick={() => handleOpenOrder(order)}
            >
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} itens</span>
            </button>
          ))}
        </OrderContainer>
      )}
    </Board>
  );
}
