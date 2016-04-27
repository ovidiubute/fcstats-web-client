import makeRequest from '../../utils/promise-xhr'

class FixtureLoader {
  getByLeagueAndYear(leagueName, startYear) {
    return makeRequest({
      method: 'GET',
      url: `http://159.203.152.181:7216/api/matches/${leagueName}/${startYear}`
    })
  }
}

export default () => {
  return new FixtureLoader()
}
