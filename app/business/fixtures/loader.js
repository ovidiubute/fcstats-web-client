import makeRequest from '../../utils/promise-xhr'

import { apiUrl } from '../../utils/api'

class FixtureLoader {
  getByLeagueAndYear(leagueName, startYear) {
    let url = apiUrl;
    url += `/matches/${leagueName}/${startYear}`;
    return makeRequest({
      method: 'GET',
      url: url
    })
  }
}

export default () => {
  return new FixtureLoader()
}
