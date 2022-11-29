import { Board, BoardHeader, OrderContainer } from './styles';
import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal';
import { useState } from 'react';
import { api } from '../../utils/api';
import { toast } from 'react-toastify';

interface OrdersBoardProps {
  icon: any;
  title: string;
  orders: Order[];
  onCancelOrder: (orderId: string) => void;
  onChangeOrderStatus: (orderId: string, status: Order['status']) => void;
}

export function OrdersBoard({
  icon,
  title,
  orders,
  onCancelOrder,
  onChangeOrderStatus,
}: OrdersBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleOpenOrder(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseOrder() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  async function handleChangeOrderStatus() {
    setIsLoading(true);

    const status =
      selectedOrder?.status === 'WAITING' ? 'IN_PRODUCTION' : 'COMPLETED';
    await api.patch(`/orders/${selectedOrder?._id}`, { status });
    toast.success(
      `O pedido da mesa ${selectedOrder?.table} foi para o proximo processo!`
    );
    onChangeOrderStatus(selectedOrder!._id, status);
    setIsLoading(false);
    setIsModalVisible(false);
  }

  async function handleCancelOrder() {
    setIsLoading(true);
    if (!selectedOrder) return;
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await api.delete(`/orders/${selectedOrder?._id}`);
    toast.success(`O pedido da mesa ${selectedOrder?.table} foi cancelado!`);
    onCancelOrder(selectedOrder!._id);
    setIsLoading(false);
    setIsModalVisible(false);
  }

  return (
    <Board>
      <OrderModal
        order={selectedOrder}
        visible={isModalVisible}
        onClose={handleCloseOrder}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleChangeOrderStatus}
        isLoading={isLoading}
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
