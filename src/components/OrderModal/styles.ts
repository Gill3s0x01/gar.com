import styled from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
`;

export const ModalBody = styled.div`
  width: 480px;
  border-radius: 20px;
  padding: 32px;
  background-color: #fff;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 22px;
    }

    button {
      line-height: 0;
      background: transparent;
      border: 0;
    }
  }
  .status-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 32px;

    small {
      font-size: 0.9rem;
      opacity: 0.8;
    }

    .body-status {
      display: flex;
      align-items: center;
      margin-top: 8px;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 5px;

        svg {
          width: 25px;
          height: 25px;
          color: #000;
        }
      }

      strong {
      }
    }
  }
`;

export const OrdersDetail = styled.div`
  margin-top: 32px;
  > strong {
    font-weight: 500;
    font-size: 0.8rem;
  }

  .order-items {
    margin-top: 16px;

    .item {
      display: flex;
      align-items: center;

      & + .item {
        margin-top: 16px;
      }

      img {
        border-radius: 6px;
      }

      .quantity {
        display: block;
        min-width: 20px;
        font-weight: 500;
        font-size: 0.9rem;
        color: #777;
        margin-left: 12px;
      }

      .product-details {
        margin-left: 4px;
        strong {
          display: block;
          margin-bottom: 4px;
        }
      }
    }
  }
`;
