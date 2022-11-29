import styled from 'styled-components';

export const Board = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 16px;
`;

export const BoardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 8px;
  font-size: 0.8rem;
  gap: 8px;
  span,
  strong {
    color: #000;
  }
  svg {
    width: 20px;
    height: 20px;
    color: #000;
  }
`;

export const OrderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 128px;
    background-color: #fff;
    border-radius: 8px;
    border: 1px solid rgba(204, 204, 204, 0.4);
    margin-top: 24px;
    gap: 4px;
    outline: none;

    & + button {
      margin-top: 24px;
    }
    span {
      font-size: 0.8rem;
      color: #000;
    }
    strong {
      font-weight: 500;
    }
  }
`;
