"use strict";

const assert = require('chai').assert;
const library = require('../app/utils/library');

describe('Library', () => {
  describe('#slugLeague', () => {
    it('should return a slug from a league code', () => {
      assert.equal(library.slugLeague('E0'), 'united-kingdom');
    });
  });

  describe('#unslugLeague', () => {
    it('should return a league code from a slug', () => {
      assert.equal(library.unslugLeague('united-kingdom'), 'E0');
    });
  });
});
