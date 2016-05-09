import React from 'react'

import { leagueCodesToNames } from './countryselector/static/leagues_to_names'

class LeagueTitle extends React.Component {
    render() {
      return (
        <h2 className="navbar-text">
          {leagueCodesToNames[this.props.leagueName]}
          <small>&nbsp;{this.props.seasonYear} - {this.props.seasonYear + 1}</small>
        </h2>
      );
    }
}

LeagueTitle.propTypes = {
  leagueName: React.PropTypes.string.isRequired,
  seasonYear: React.PropTypes.number.isRequired
}

export default LeagueTitle
