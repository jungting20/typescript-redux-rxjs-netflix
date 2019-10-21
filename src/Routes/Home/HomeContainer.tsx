import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../Store';
import { HomeActions } from '../../Store/module/Home';
import { HomePresenter } from './HomePresenter';

interface HomeContainerProps {
  value: string;
  hello(str: string): any;
}

class HomeContainer extends React.Component<HomeContainerProps> {
  handlehello = () => {
    const { hello } = this.props;
    hello('정호안녕');
  };

  public render() {
    const { value } = this.props;
    return <HomePresenter value={value} handlehello={this.handlehello} />;
  }
}

// props로 넣어줄 스토어 상태값
//state -> {Home:Home:{}} 이렇게 들어옴!!
const mapStateToProps = ({ Home }: State) => {
  return {
    value: Home.echohello,
  };
};

const dispatchAction = dispatch => ({
  hello: (str: string) => dispatch(HomeActions.homeinit(str)),
});

export default connect(
  mapStateToProps,
  dispatchAction
)(HomeContainer);
