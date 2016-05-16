import React from 'react'
import { getCountryFlagByName } from './countryselector/country_flag_finder'
import { leagueNamesToCountries } from './countryselector/static/leagues_to_countries'
import { slugLeague } from '../utils/library'

class CountryCarousel extends React.Component {
  render () {
    const imageElements = Object.keys(leagueNamesToCountries).map((leagueName) => {
      let countryName = leagueNamesToCountries[leagueName];
      let countryFlagPosition = getCountryFlagByName(countryName);
      let imgStyle = {
        width: countryFlagPosition.width + 'px',
        height: countryFlagPosition.height + 'px',
        background: "url('/static/cfsprites.png')",
        backgroundPosition:  countryFlagPosition.x + "px " + countryFlagPosition.y + "px",
        display: "inline-block",
        marginTop: "-14px",
        marginLeft: "-12px"
      };

      return (
        <a key={"select-league-" + leagueName}
          onClick={this.props.onSelect.bind(this, leagueName)}
          href={"#/" + slugLeague(leagueName)}
          style={{margin: 'auto'}}
        >
          <img style={imgStyle}
            alt={countryName}
            src="/static/transparent.gif"
          />
        </a>
      );
    });

    return (
      <div style={{display: 'flex', marginTop: '20px'}}>
        {imageElements}
      </div>
    );
  }
}

CountryCarousel.propTypes = {
  onSelect: React.PropTypes.func.isRequired
}

export default CountryCarousel
