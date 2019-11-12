import * as React from 'react';
import { connect } from 'react-redux';
import { HomeActions } from '../../Store/module/Home';
import HomePresenter from './HomePresenter';

class HomeContainer extends React.Component<
  CustomPropsTypes.HomeContainerProps
> {
  public render() {
    console.log(this.props);
    const { value } = this.props;

    return (
      <HomePresenter
        nowPlaying={null}
        upcoming={null}
        popular={null}
        error={null}
        loading={null}
      />
    );
  }
}

// props로 넣어줄 스토어 상태값
//state -> {Home:Home:{}} 이렇게 들어옴!!
const mapStateToProps = ({ Home }: Moduletype.State) => Home;

const dispatchAction = dispatch => ({
  home: (str: string) => dispatch(HomeActions.get_total()),
});

export default connect(
  mapStateToProps,
  dispatchAction
)(HomeContainer);
