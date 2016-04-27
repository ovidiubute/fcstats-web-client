import React from 'react';

import { getCountryFlagByName } from './country_flag_finder';
import { leagueNamesToCountries } from './static/leagues_to_countries'

class LeagueSelector extends React.Component {
    onClick(evt) {
      evt.preventDefault();
      this.props.onClick();
    }

    render() {
        const countryFlagPosition = getCountryFlagByName(leagueNamesToCountries[this.props.leagueName]);
        const imgStyle = {
            width: countryFlagPosition.width + 'px',
            height: countryFlagPosition.height + 'px',
            background: "url('/static/cfsprites.png')",
            backgroundPosition:  countryFlagPosition.x + "px " + countryFlagPosition.y + "px",
            display: "inline-block",
            marginTop: "-8px",
            marginLeft: "-4px"
        };

        return (
            <a onClick={this.onClick.bind(this)} className="navbar-brand" href="#">
                <img style={imgStyle} alt="League" src="/static/transparent.gif"/>
            </a>
        );
    }
}

LeagueSelector.defaultProps = {
    leagueName: 'SP1'
};

LeagueSelector.propTypes = {
  leagueName: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired
}

export default LeagueSelector;
