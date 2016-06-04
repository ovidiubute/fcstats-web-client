import React from 'react'
import '!style!css!bootstrap/dist/css/bootstrap.min.css'
import '!style!css!../main.css'

import Nav from './Nav.jsx'
import LeagueTable from './LeagueTable.jsx'
import LeagueSelectModal from './LeagueSelectModal.jsx'
import Feedback from './Feedback.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    }
  }

  onSelectCountry() {
    this.setState({modalIsOpen: false});
  }

  onClickFlag() {
    this.setState({modalIsOpen: true});
  }

  render() {
    return (
      <div className="container-fluid" style={{'marginTop': "80px"}}>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-header">
                <Nav
                  activeLeagueName={this.props.leagueName}
                  activeSeasonYear={this.props.seasonYear}
                  onClickFlag={this.onClickFlag.bind(this)}
                />
              </div>
              <div className="panel-body">
                <LeagueTable
                  seasonYear={this.props.seasonYear}
                  leagueName={this.props.leagueName}
                />
              </div>
            </div>
          </div>
        </div>
        <LeagueSelectModal
          modalIsOpen={this.state.modalIsOpen}
          onSelectCountry={this.onSelectCountry.bind(this)}
        />
      <Feedback />
      </div>
    );
  }
}

export default App;
