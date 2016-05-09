import React from 'react';
import Loading from 'react-loading';

import StandingsProvider from '../business/standings/provider'
import TransferStateEnum from '../business/standings/transferstateenum'

class LeagueTable extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        standings: [],
        loadingState: TransferStateEnum.IDLE
      }

      this.loadData = this.loadData.bind(this);
      this.isInLoading = this.isInLoading.bind(this);
      this.finishedLoading = this.finishedLoading.bind(this);
    }

    loadData(leagueName, seasonYear) {
      // Load data
      StandingsProvider().getFinalStandings(leagueName, seasonYear).then((data) => {
        // Finished
        this.setState({standings: data.items, loadingState: TransferStateEnum.OK});
      }).catch((err) => {
        this.setState({loadingState: TransferStateEnum.FAILED})
        console.log(err);
      });
    }

    componentWillReceiveProps (nextProps) {
      if (nextProps.leagueName != this.props.leagueName
        || nextProps.seasonYear != this.props.seasonYear) {
        this.setState({loadingState: TransferStateEnum.LOADING});
        this.loadData(nextProps.leagueName, nextProps.seasonYear)
      }
    }

    componentWillMount() {
      this.loadData(this.props.leagueName, this.props.seasonYear)
    }

    shouldComponentUpdate(nextProps, nextState) {
      return !(nextProps.leagueName == this.props.leagueName
        && nextProps.seasonYear == this.props.seasonYear
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
        const rows = this.state.standings.map((entry, idx, arr) => {
            let className = (idx === 0 ? 'success' : idx < 5 ? 'info' : idx - arr.length >= -2 ? 'danger' : '');
            return (
                <tr key={"team-" + idx} className={className}>
                    <td>{idx + 1}</td>
                    <td>{entry.team}</td>
                    <td>{entry.played}</td>
                    <td>{entry.won}</td>
                    <td>{entry.drew}</td>
                    <td>{entry.lost}</td>
                    <td>{entry.goalsFor}</td>
                    <td>{entry.goalsAgainst}</td>
                    <td>{entry.goalDiff}</td>
                    <td>{entry.points}</td>
                </tr>
            );
        });

        let renderableData;
        if (this.finishedLoading()) {
          if (!rows.length) {
            renderableData = <div>Sorry, no data yet :-)</div>
          } else {
            renderableData = <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Team</th>
                        <th>Pld</th>
                        <th>W</th>
                        <th>D</th>
                        <th>L</th>
                        <th>F</th>
                        <th>A</th>
                        <th>+/-</th>
                        <th>Pts</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>;
          }
        } else if (this.isInLoading()) {
          renderableData = <Loading type='bars' delay={0} color='#808080' />;
        } else {
          renderableData = <div>There was a problem loading the data. Please try again later.</div>;
        }

        return (
          <div id="league-standings">
            {renderableData}
          </div>
        );
    }
}

export default LeagueTable
