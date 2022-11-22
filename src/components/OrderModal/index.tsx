import closeIcon from '../../assets/images/close-icon.svg';
import { Overlay, ModalBody, OrdersDetail, Actions } from './styles';
import { BiTimer } from 'react-icons/bi';
import { GiCampCookingPot } from 'react-icons/gi';
import { AiOutlineFileDone } from 'react-icons/ai';
import { BiArchiveOut } from 'react-icons/bi';
import { BsTrash } from 'react-icons/bs';
import { Order } from '../../types/Order';
import { formatCurrency } from '../../utils/formatCurrency';
import { useEffect } from 'react';

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
  onClose: () => void;
}

export function OrderModal({ visible, order, onClose }: OrderModalProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!visible || !order) {
    return null;
  }

  // uma forma de calcular o total => para mostrar só usar formatCurrency(total)
  // let total = 0;
  // order.products.forEach(({ product, quantity }) => {
  //   total += product.price * quantity;
  // });

  const total = order.products.reduce((total, { product, quantity }) => {
    return total + product.price * quantity;
  }, 0);

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>
          <button type="button" onClick={onClose}>
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

          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </OrdersDetail>

        <Actions>
          <button type="button" className="primary">
            <span>
              {order.status === 'WAITING' && <GiCampCookingPot />}
              {order.status === 'IN_PRODUCTION' && <AiOutlineFileDone />}
              {order.status === 'COMPLETED' && <BiArchiveOut />}
            </span>
            <strong>
              {order.status === 'WAITING' && 'Iniciar produção'}
              {order.status === 'IN_PRODUCTION' && 'Finalizar pedido'}
              {order.status === 'COMPLETED' && 'Arquivar pedido'}
            </strong>
          </button>
          {order.status != 'COMPLETED' && (
            <button type="button" className="secondary">
              <span>
                <BsTrash />
              </span>
              <strong>Cancelar pedido</strong>
            </button>
          )}
        </Actions>
      </ModalBody>
    </Overlay>
  );
}
