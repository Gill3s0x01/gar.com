import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #d73035;
  height: 198px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1216px;
  .page-details {
    h1 {
      color: #fff;
      font-size: 2rem;
    }
    h2 {
      color: #fff;
      opacity: 0.9;
      font-size: 1rem;
      font-weight: 400;
      margin-top: 6px;
    }
  }
`;
