import React from 'react'

import { leagueCodesToNames } from './countryselector/static/leagues_to_names'

class LeagueTitle extends React.Component {
    render() {
      return (
        <h2 className="navbar-text">{leagueCodesToNames[this.props.leagueName]}</h2>
      );
    }
}

LeagueTitle.propTypes = {
  leagueName: React.PropTypes.string.isRequired
}

LeagueTitle.defaultProps = {
  leagueName: 'SP1'
}

export default LeagueTitle
