"use strict";

import assert from 'assert'
import { getCountryFlagByName } from '../app/components/countryselector/country_flag_finder'

describe('country_flag_finder', function () {
  it('should return position for given country', function () {
    let position = getCountryFlagByName('Spain');
    assert.strictEqual(position.width, 70);
    assert.strictEqual(position.height, 47);
    assert.strictEqual(position.x, -71);
    assert.strictEqual(position.y, -768);
  });
});
