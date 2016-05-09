import React from 'react';

import LeagueSelector from './countryselector/LeagueSelector.jsx'
import SeasonSelector from './SeasonSelector.jsx'
import LeagueTitle from './LeagueTitle.jsx'

class Nav extends React.Component {
    render() {
        return (
            <nav role="navigation" className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                      <LeagueSelector
                        leagueName={this.props.activeLeagueName}
                        onClick={this.props.onClickFlag}
                      />
                    </div>
                    <div className="navbar-collapse collapse" aria-expanded="false" style={{height: "1px"}}>
                      <LeagueTitle
                        leagueName={this.props.activeLeagueName}
                        seasonYear={this.props.activeSeasonYear}
                      />

                      <div className="navbar-right">
                        <SeasonSelector
                          selectedYear={this.props.activeSeasonYear}
                          leagueName={this.props.activeLeagueName}
                        />
                      </div>
                    </div>
                </div>
            </nav>
        );
    }
}

Nav.propTypes = {
  activeLeagueName: React.PropTypes.string.isRequired,
  activeSeasonYear: React.PropTypes.number.isRequired,
  onClickFlag: React.PropTypes.func.isRequired
}

export default Nav
