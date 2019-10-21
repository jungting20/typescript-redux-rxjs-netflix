import * as React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 100px;
  background-color: red;
`;

interface HomePresenterProps {
  value: string;
  handlehello(): void;
}

export const HomePresenter: React.SFC<HomePresenterProps> = ({
  value,
  handlehello,
}) => {
  return <Box onClick={handlehello}>{value}</Box>;
};
