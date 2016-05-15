// Library imports
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

// App specific imports
import App from './components/App.jsx'

class AppWrapper extends React.Component {
  render() {
    return (<App
      leagueName={this.props.params.leagueName || 'SP1'}
      seasonYear={Number.parseInt(this.props.params.seasonYear) || 1998}
    />);
  }
}

// main()
render((
  <Router history={browserHistory}>
    <Route path="/" component={AppWrapper} />
    <Route path="/:leagueName/:seasonYear" component={AppWrapper}/>
    <Route path="/:leagueName" component={AppWrapper}/>
  </Router>
), document.getElementById('app'));
