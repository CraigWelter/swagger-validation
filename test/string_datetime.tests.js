'use strict';

var moment = require('moment');
var helper = require('./test_helper');
var validate = require('../lib/validation/parameter');

describe('string - datetime', function() {
  it('should validate', function() {
    var value = '2014-01-01T17:00:00-0700';
    var expected = moment('2014-01-01T17:00:00-0700').toDate();
    var ret = validate(helper.makeStringParam('string', false, 'date-time'), value);
    helper.validateSuccess(ret, 1, [expected]);
  });

  it('should validate with custom pattern', function() {
    var value = '1/1/2014 5:00PM';
    var expected = moment('2014-01-01T17:00:00').toDate();
    var ret = validate(helper.makeStringParam('string', false, 'date-time', 'M/D/YYYY h:mmA'), value);
    helper.validateSuccess(ret, 1, [expected]);
  });

  it('should not validate with random string', function() {
    var value = 'this is a string that does not match ISO 8601';
    var ret = validate(helper.makeStringParam('string', false, 'date-time'), value);
    helper.validateError(ret, 1, ["testParam is not a timestamp that can be parsed according to the expected pattern ISO 8601"]);
  });

  it('should not validate with required field null', function() {
    var value = null;
    var ret = validate(helper.makeStringParam('string', true, 'date-time'), value);
    helper.validateError(ret, 1, ["testParam is required"]);
  });

  it('should not validate with required field undefined', function() {
    var ret = validate(helper.makeStringParam('string', true, 'date-time'), undefined);
    helper.validateError(ret, 1, ["testParam is required"]);
  });

  it('should not validate with required field empty string', function() {
    var value = '';
    var ret = validate(helper.makeStringParam('string', true, 'date-time'), value);
    helper.validateError(ret, 1, ["testParam is required"]);
  });
});