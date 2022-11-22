import { AiOutlineFileDone } from 'react-icons/ai';
import { BiTimer } from 'react-icons/bi';
import { GiCampCookingPot } from 'react-icons/gi';
import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    _id: '6376a82aa6b8d59c0ab6afa6',
    table: '17',
    status: 'WAITING',
    products: [
      {
        product: {
          name: 'Pizza Quatro Queijos',
          imagePath: '1668710702856-quatro-queijos.png',
          price: 41.8,
          category: '63767f1e091c466ed8023ff4',
        },
        quantity: 3,
        _id: '6376a82aa6b8d59c0ab6afa7',
      },
      {
        product: {
          name: 'Coca Cola',
          imagePath: '1668712145719-coca-cola.png',
          price: 8,
          category: '6376863dad42cbe1501f9d7b',
        },
        quantity: 2,
        _id: '6376a82aa6b8d59c0ab6afa8',
      },
      {
        product: {
          name: 'X-Egg',
          imagePath: '1668712482887-egg.png',
          price: 18,
          category: '637681a3e6b224a1cbd57363',
        },
        quantity: 1,
        _id: '6376a82aa6b8d59c0ab6afa9',
      },
    ],
  },
  {
    _id: '6376a8dfa6b8d59c0ab6afd0',
    table: '10',
    status: 'COMPLETED',
    products: [
      {
        product: {
          name: 'Pizza Quatro Queijos',
          imagePath: '1668710702856-quatro-queijos.png',
          price: 41.8,
          category: '63767f1e091c466ed8023ff4',
        },
        quantity: 1,
        _id: '6376a8dfa6b8d59c0ab6afd1',
      },
      {
        product: {
          name: 'Coca Cola',
          imagePath: '1668712145719-coca-cola.png',
          price: 8,
          category: '6376863dad42cbe1501f9d7b',
        },
        quantity: 1,
        _id: '6376a8dfa6b8d59c0ab6afd2',
      },
    ],
  },
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard orders={orders} icon={<BiTimer />} title="Fila de espera" />
      <OrdersBoard
        orders={[]}
        icon={<GiCampCookingPot />}
        title="Em preparação"
      />
      <OrdersBoard
        orders={[]}
        icon={<AiOutlineFileDone />}
        title="Pedido pronto"
      />
    </Container>
  );
}
