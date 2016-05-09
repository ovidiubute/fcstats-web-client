import React from 'react'
import Loading from 'react-loading'

import { DropdownButton, MenuItem } from 'react-bootstrap'

import SeasonsLoader from '../business/seasons/loader'
import TransferStateEnum from '../business/standings/transferstateenum'

class SeasonSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      seasons: [],
      loadingState: TransferStateEnum.IDLE
    }

    this.loadData = this.loadData.bind(this);
    this.isInLoading = this.isInLoading.bind(this);
    this.finishedLoading = this.finishedLoading.bind(this);
  }

  loadData(leagueName) {
    // Load data
    SeasonsLoader().getByLeague(leagueName).then((data) => {
      // Finished
      this.setState({seasons: data, loadingState: TransferStateEnum.OK});
    }).catch((err) => {
      this.setState({loadingState: TransferStateEnum.FAILED})
      console.log(err);
    });
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.leagueName != this.props.leagueName) {
      this.setState({loadingState: TransferStateEnum.LOADING});
      this.loadData(nextProps.leagueName);
    }
  }

  componentDidMount() {
    this.loadData(this.props.leagueName, this.props.seasonYear)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !(nextProps.leagueName == this.props.leagueName
      && nextState == this.state.loadingState);
  }

  isInLoading() {
    return (
      this.state.loadingState == TransferStateEnum.LOADING
      || this.state.loadingState == TransferStateEnum.IDLE
    )
  }

  finishedLoading() {
    return (this.state.loadingState == TransferStateEnum.OK);
  }

  render() {
    let renderableData;
    if (this.finishedLoading()) {
      if (!this.state.seasons.length) {
        renderableData = <div>No data :-(</div>
      } else {
        const items = this.state.seasons.map((s, index) => {
          const isActive = (s.yearStart === this.props.selectedYear);
          return (
            <MenuItem
              key={"season-" + index}
              active={isActive}
              href={"#/" + this.props.leagueName + "/" + s.yearStart}
            >
              {s.yearStart} - {s.yearEnd}
            </MenuItem>
          );
        });

        renderableData = (
          <DropdownButton bsStyle="default"
            title="Season"
            key="season-selector"
            id="season-selector-dropdown"
            style={{marginTop: "14px"}}
          >
            {items}
          </DropdownButton>
        );
      }
    } else if (this.isInLoading()) {
      renderableData = <Loading type='bars' delay={0} color='#808080' />;
    } else {
      renderableData = <div>Error ;-(</div>;
    }

    return renderableData;
  }
}

SeasonSelector.propTypes = {
  leagueName: React.PropTypes.string.isRequired,
  selectedYear: React.PropTypes.number.isRequired
}

export default SeasonSelector
