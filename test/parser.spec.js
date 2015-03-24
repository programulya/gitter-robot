/**
 * Created by programulya on 3/24/15.
 */

var should = require('should');
var parser = require('../source/parser');

describe('parser spec', function () {
    it('should parser exists', function () {
        should(parser).be.ok;
    });
});