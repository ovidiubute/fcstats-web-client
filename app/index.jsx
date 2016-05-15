// Library imports
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

// App specific imports
import App from './components/App.jsx'
import { unslugLeague } from './utils/library'

class AppWrapper extends React.Component {
  render() {
    let leagueName = 'SP1';
    if (typeof this.props.params.leagueSlug !== 'undefined') {
      let tryLeague = unslugLeague(this.props.params.leagueSlug);
      if (typeof tryLeague !== 'undefined') {
        leagueName = tryLeague;
      }
    }

    let seasonYear = 1998;
    if (typeof this.props.params.seasonYear !== 'undefined') {
      let tryYear = Number.parseInt(this.props.params.seasonYear);
      if (!Number.isNaN(tryYear)) {
        seasonYear = tryYear;
      }
    }

    return (<App
      leagueName={leagueName}
      seasonYear={seasonYear}
    />);
  }
}

// main()
render((
  <Router history={hashHistory}>
    <Route path="/" component={AppWrapper} />
    <Route path="/:leagueSlug/:seasonYear" component={AppWrapper}/>
    <Route path="/:leagueSlug" component={AppWrapper}/>
  </Router>
), document.getElementById('app'));
