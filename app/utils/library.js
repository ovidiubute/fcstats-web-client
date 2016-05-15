"use strict";

import { leagueNamesToCountries } from '../components/countryselector/static/leagues_to_countries'

function unslugLeague (leagueSlug) {
  return Object.keys(leagueNamesToCountries).find((code) => {
    return leagueNamesToCountries[code].toLowerCase() === leagueSlug.toLowerCase();
  });
}

function slugLeague (leagueCode) {
  return leagueNamesToCountries[leagueCode].toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export { slugLeague, unslugLeague }
