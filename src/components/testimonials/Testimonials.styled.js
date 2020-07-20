import styled from 'styled-components';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 32px 16px;

  @media(min-width: 1024px) {
    flex-direction: row;
    margin: 32px 0 0 90px;
  }
`;

const ColumnWrapper = styled.div`
  max-width: 400px;
  margin: 0;

  @media(min-width: 1024px) {
    max-width: 500px;
    margin: 0 16px;
  }
`;

export {
  Wrapper,
  ColumnWrapper
}
