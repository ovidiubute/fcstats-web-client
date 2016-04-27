import { getCountryFlagInfo } from './static/country_flag_meta'

const getCountryFlagByName = function (countryName) {
  let frame = getCountryFlagInfo(countryName);

  return {
    width: frame.w,
    height: frame.h,
    x: 0 - frame.x,
    y: 0 - frame.y
  };
}

export { getCountryFlagByName }
