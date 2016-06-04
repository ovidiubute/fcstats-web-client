import makeRequest from '../../utils/promise-xhr'

import { apiUrl } from '../../utils/api'

class SeasonsLoader {
  getByLeague(leagueName) {
    let url = apiUrl;
    url += `/seasons/${leagueName}`;
    return makeRequest({
      method: 'GET',
      url: url
    })
  }
}

export default () => {
  return new SeasonsLoader();
}
