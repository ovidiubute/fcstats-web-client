// Library imports
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

// App specific imports
import App from './components/App.jsx'
import { unslugLeague } from './utils/library'

class AppWrapper extends React.Component {
  render() {
    return (<App
      leagueName={typeof this.props.params.leagueSlug !== 'undefined' ? unslugLeague(this.props.params.leagueSlug) : 'SP1'}
      seasonYear={typeof this.props.params.seasonYear !== 'undefined' ? Number.parseInt(this.props.params.seasonYear) : 1998}
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
