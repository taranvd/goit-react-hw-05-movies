import styled from 'styled-components';

export const Item = styled.li`
  padding: 20px;
  border: 1px solid #eee;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;
