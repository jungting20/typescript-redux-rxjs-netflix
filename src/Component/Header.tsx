import * as React from 'react';
import styled from 'styled-components';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 0;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  background-color: rgba(20, 20, 20, 0.8);
  box-shadow: 0px 1px 5px 2px rgba(20, 20, 20, 0.8);
`;

interface ItemProps {
  current: boolean;
}

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 50px;
  text-align: center;
  height: 50px;
  border-bottom: 5px solid
    ${(props: ItemProps) => (props.current ? '#3498db' : 'transeparent')};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const finalRouter = (props: RouteComponentProps) => {
  return (
    <Header>
      <List>
        <Item current={props.location.pathname === '/'}>
          <SLink to="/">Movies</SLink>
        </Item>
        <Item current={props.location.pathname === 'search'}>
          <SLink to="search">Search</SLink>
        </Item>
        <Item current={props.location.pathname === 'Tv'}>
          <SLink to="tv">Tv</SLink>
        </Item>
      </List>
    </Header>
  );
};

export default withRouter(finalRouter);
