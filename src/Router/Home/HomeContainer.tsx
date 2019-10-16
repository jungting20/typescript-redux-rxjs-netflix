import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../Store';
import { HomeAction } from '../../Store/module/Home';

interface HomeContainerProps {
  value: string;
  hello: (str: string) => any;
}

class HomeContainer extends React.Component<HomeContainerProps> {
  public render() {
    const { value, hello } = this.props;
    return <div>{value}</div>;
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
  hello: (str: string) => dispatch(HomeAction.homeinit(str)),
});

export default connect(
  mapStateToProps,
  dispatchAction
)(HomeContainer);
