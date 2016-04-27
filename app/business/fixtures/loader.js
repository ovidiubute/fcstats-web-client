import makeRequest from '../../utils/promise-xhr'

class FixtureLoader {
  getByLeagueAndYear(leagueName, startYear) {
    return makeRequest({
      method: 'GET',
      url: `https://footballstats.oviprojects.xyz/api/matches/${leagueName}/${startYear}`
    })
  }
}

export default () => {
  return new FixtureLoader()
}
