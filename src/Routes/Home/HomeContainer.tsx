import * as React from 'react';
import { connect } from 'react-redux';
import { HomeActions, HomeActionEnum } from '../../Store/module/Home';
import HomePresenter from './HomePresenter';
import { Dispatch } from 'redux';

interface Props extends StateType.HomeState {
  home: typeof HomeActions.get_total;
}

class HomeContainer extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.props.home();
  }

  public render() {
    const { nowPlaying, popular, upcoming, error, loading, home } = this.props;

    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={popular}
        popular={upcoming}
        error={error}
        loading={loading}
        home={home}
      />
    );
  }
}

// props로 넣어줄 스토어 상태값
// state -> {Home:Home:{}} 이렇게 들어옴!!
const mapStateToProps = ({ Home }: Moduletype.State) => Home;
// const mapStateToProps = status => status;

const dispatchAction = (dispatch: Dispatch) => ({
  home: () => dispatch(HomeActions.get_total()),
  test: () => dispatch(HomeActions.get_test()),
});

export default connect(
  mapStateToProps,
  dispatchAction
)(HomeContainer);
