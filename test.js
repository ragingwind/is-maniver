'use strict';
var assert = require('assert');
var isManiver = require('./');

it('should return correct results', function () {
  assert.equal(isManiver('1'), true);
  assert.equal(isManiver('1.0'), true);
  assert.equal(isManiver('1.0.9'), true);
  assert.equal(isManiver('1.0.9.102'), true);
  assert.equal(isManiver('99999.99999.99999.99999'), true);
  assert.equal(isManiver('1.0.9.102.01'), false);
  assert.equal(isManiver('1.12333.100000.102'), false);
  assert.equal(isManiver('.102'), false);
  assert.equal(isManiver('9999999'), false);
  assert.equal(isManiver('99999.99.99.99999'), true);
});
