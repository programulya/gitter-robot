/**
 * Created by programulya on 3/24/15.
 */

var should = require('should');
var parser = require('../source/parser');

describe('parser spec', function() {
    it('should parser exists', function() {
        should(parser).be.ok;
    });
});

describe("addition operator", function() {
    it("should return result of adding two numbers without braces", function() {
        should(parser.calc("1+2")).equal(3);
    });

    it("should return result of adding two numbers with braces", function() {
        should(parser.calc("(1+2)")).equal(3);
    });
});

describe("subtraction operator", function() {
    it("should return result of subtracting two numbers without braces", function() {
        should(parser.calc("3-1")).equal(2);
    });

    it("should return result of subtracting two numbers with braces", function() {
        should(parser.calc("(3-1)")).equal(2);
    });
});

describe("multiplication operator", function() {
    it("should return result of multiplication two numbers without braces", function() {
        should(parser.calc("2*2")).equal(4);
    });

    it("should return result of multiplication two numbers with braces", function() {
        should(parser.calc("(2*2)")).equal(4);
    });
});

describe("division operator", function() {
    it("should return result of division two numbers without braces", function() {
        should(parser.calc("1/2")).equal(0.5);
    });

    it("should return result of division two numbers with braces", function() {
        should(parser.calc("(1/2)")).equal(0.5);
    });
});

describe("correct expression", function() {
    it("should return result of expression", function() {
        should(parser.calc("1/2 + 5 + 4*5")).equal(25.5);
    });

    it("should return result of expression with braces", function() {
        should(parser.calc("1/2 + (5 + 4) * 5")).equal(45.5);
    });

    it("should return result of expression with spaces", function() {
        should(parser.calc("1/2    + (5 + 4) * 5")).equal(45.5);
    });
});

describe("incorrect expression", function() {
    it("should return result of incorrect expression (wrong braces)", function() {
        should(parser.calc("(1/2 + 5 + 4*5")).equal(undefined);
    });

    it("should return result of incorrect expression (wrong operator)", function() {
        should(parser.calc("1/2 ++ 5 + 4) * 5")).equal(undefined);
    });

    it("should return result of incorrect expression (wrong symbols)", function() {
        should(parser.calc("[1/2] + 5 + 4) * 5")).equal(undefined);
    });

    it("should return result of incorrect expression (wrong symbols [])", function() {
        should(parser.calc("[1/2] + 5 + 4 * 5")).equal(undefined);
    });

    it("should return result of incorrect expression (wrong symbols >>)", function() {
        should(parser.calc("1/2 >> 5 + 4) * 5")).equal(undefined);
    });

    it("should return result of incorrect expression (wrong symbols a, b)", function() {
        should(parser.calc("1/2 + 5a + 4b * 5")).equal(undefined);
    });

    it("should return result of incorrect expression (wrong all symbols)", function() {
        should(parser.calc("trololo")).equal(undefined);
    });
});


/*describe("negative numbers", function() {
 it("should return exception", function() {
 (function() {
 calc.add("1,-4");
 }).should.throw("negatives are not allowed");
 });
 });*/

/*

 it("should return 0 for empty string", function() {
 should(calc.add("")).equal(0);
 });

 it("should return 1 for 1", function() {
 should(calc.add("1")).equal(1);
 });

 it("should return 2 for 2", function() {
 should(calc.add("2")).equal(2);
 });

 it("should return 3 for 1,2", function() {
 should(calc.add("1,2")).equal(3);
 });

 it("should return 5 for 1,2,2", function() {
 should(calc.add("1,2,2")).equal(5);
 });

 it("should return 5 for 1,2,1,3,5", function() {
 should(calc.add("1,2,1,3,5")).equal(12);
 });

 it("should return 6 with new line separator", function() {
 should(calc.add("3,1\n2")).equal(6);
 });
 */