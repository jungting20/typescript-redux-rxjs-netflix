import * as React from 'react';
import { connect } from 'react-redux';
import { HomeActions, HomeActionEnum } from '../../Store/module/Home';
import HomePresenter from './HomePresenter';
import { Dispatch } from 'redux';

interface Props extends StateType.HomeState {
  Homeinit: typeof HomeActions.get_total;
}

class HomeContainer extends React.Component<Props> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.Homeinit();
  }

  public render() {
    const { nowPlaying, popular, upcoming, error, loading } = this.props;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={popular}
        popular={upcoming}
        error={error}
        loading={loading}
      />
    );
  }
}

// props로 넣어줄 스토어 상태값
// state -> {Home:Home:{}} 이렇게 들어옴!!
const mapStateToProps = ({ Home }: Moduletype.State) => Home;
// const mapStateToProps = status => status;

const dispatchAction = (dispatch: Dispatch) => ({
  Homeinit: () => dispatch(HomeActions.get_total()),
  test: () => dispatch(HomeActions.get_test()),
});

export default connect(
  mapStateToProps,
  dispatchAction
)(HomeContainer);
