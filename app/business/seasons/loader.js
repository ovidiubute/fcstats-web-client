import makeRequest from '../../utils/promise-xhr'

class SeasonsLoader {
  getByLeague(leagueName) {
    return makeRequest({
      method: 'GET',
      url: ENV.API_HTTPS ? 'https' : 'http' + '://' + ENV.API_ENDPOINT + ':' +
      ENV.API_PORT + `/api/seasons/${leagueName}`
    })
  }
}

export default () => {
  return new SeasonsLoader();
}
