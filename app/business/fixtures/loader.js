import makeRequest from '../../utils/promise-xhr'

class FixtureLoader {
  getByLeagueAndYear(leagueName, startYear) {
    return makeRequest({
      method: 'GET',
      url: `http://localhost:7216/api/matches/${leagueName}/${startYear}`
    })
  }
}

export default () => {
  return new FixtureLoader()
}
