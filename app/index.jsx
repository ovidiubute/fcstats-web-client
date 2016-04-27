// Library imports
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

// App specific imports
import App from './components/App.jsx'

// main()
render((
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/:leagueName/:seasonYear" component={App}/>
    </Router>
), document.getElementById('app'));
