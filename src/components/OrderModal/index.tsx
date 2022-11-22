import closeIcon from '../../assets/images/close-icon.svg';
import { Overlay, ModalBody, OrdersDetail } from './styles';
import { BiTimer } from 'react-icons/bi';
import { GiCampCookingPot } from 'react-icons/gi';
import { AiOutlineFileDone } from 'react-icons/ai';
import { Order } from '../../types/Order';
import { formatCurrency } from '../../utils/formatCurrency';

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
}

export function OrderModal({ visible, order }: OrderModalProps) {
  if (!visible || !order) {
    return null;
  }

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>
          <button type="button">
            <img src={closeIcon} alt="close" width={'30px'} />
          </button>
        </header>
        <div className="status-container">
          <small>Status do Pedido</small>
          <div className="body-status">
            <span>
              {order.status === 'WAITING' && <BiTimer />}
              {order.status === 'IN_PRODUCTION' && <GiCampCookingPot />}
              {order.status === 'COMPLETED' && <AiOutlineFileDone />}
            </span>
            <strong>
              {order.status === 'WAITING' && 'Fila de Espera'}
              {order.status === 'IN_PRODUCTION' && 'Em preparação'}
              {order.status === 'COMPLETED' && 'Pedido pronto'}
            </strong>
          </div>
        </div>
        <OrdersDetail>
          <strong>Itens</strong>

          <div className="order-items">
            {order.products.map(({ _id, product, quantity }) => (
              <div className="item">
                <img
                  src={`http://localhost:8080/uploads/${product.imagePath}`}
                  alt={product.name}
                  width="56"
                  height="28.51"
                />
                <span className="quantity">{quantity}x</span>

                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>
        </OrdersDetail>
      </ModalBody>
    </Overlay>
  );
}
