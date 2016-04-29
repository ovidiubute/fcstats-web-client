import makeRequest from '../../utils/promise-xhr'

class FixtureLoader {
  getByLeagueAndYear(leagueName, startYear) {
    return makeRequest({
      method: 'GET',
      url: ENV.API_HTTPS ? 'https' : 'http' + '://' + ENV.API_ENDPOINT + ':' +
      ENV.API_PORT + `/api/matches/${leagueName}/${startYear}`
    })
  }
}

export default () => {
  return new FixtureLoader()
}
