import _ from 'lodash'

import league_country from 'json!../../../../staticdata/league_country.json'
import FixtureLoader from '../fixtures/loader'

class StandingsProvider {

  _conjWithMatch(item, home, score, winPoints) {
    let _item = _.cloneDeep(item);

    _item.goalsFor += home ? score.home : score.away;
    _item.goalsAgainst += home ? score.away : score.home;
    _item.goalDiff = _item.goalsFor - _item.goalsAgainst;

    if (score.result == 0) {
      _item.drew += 1;
      _item.points += 1;
    } else if (score.result == 1) {
      if (!home) {
        _item.won += 1;
        _item.points += winPoints;
      } else {
        _item.lost += 1;
      }
    } else {
      if (home) {
        _item.won += 1;
        _item.points += winPoints;
      } else {
        _item.lost += 1;
      }
    }
    _item.played += 1;

    return _item;
  }

  getFinalStandings(leagueName, year) {
    const rulesJson = require('json!../../../../staticdata/' + league_country[leagueName] + '/rules.json');
    const winPoints = rulesJson.rules.since.year <= year ? rulesJson.rules.since.win : rulesJson.rules.before.win;

    return new Promise((resolve, reject) => {
      FixtureLoader().getByLeagueAndYear(leagueName, year).then((data) => {
        let standings = new Map();
        data.forEach((match) => {
          [match.homeTeam.name, match.awayTeam.name].forEach((teamName, index) => {
            if (!standings.has(teamName)) {
              standings.set(teamName, {
                points: 0,
                goalsFor: 0,
                goalsAgainst: 0,
                won: 0,
                lost: 0,
                drew: 0,
                played: 0
              });
            }

            // Set match results
            standings.set(teamName, this._conjWithMatch(standings.get(teamName), index == 0, match.score, winPoints));
          });
        });

        // Sort
        let arrStandings = [];
        standings.forEach((item, key) => {
          let leagueItem = _.cloneDeep(item);
          leagueItem.team = key;
          arrStandings.push(leagueItem);
        });
        resolve({
          items: _.orderBy(arrStandings, ['points'], ['desc']),
          length: arrStandings.length
        });
      })
    });
  }
}

export default () => {
  return new StandingsProvider()
}
