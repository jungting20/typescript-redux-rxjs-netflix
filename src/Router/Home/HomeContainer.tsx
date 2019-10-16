import * as React from 'react';
import { State } from '../../Store/';
import { connect } from 'react-redux';
import { HomeAction } from '../../Store/module/Home';

class HomeContainer extends React.Component {}

const mapStateToProps = (state: State) => {
  console.log(state);
};

export default HomeContainer;
