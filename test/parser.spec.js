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

    it("should return result of adding two numbers with dots", function() {
        should(parser.calc("1.1+2")).equal(3.1);
    });
});

describe("subtraction operator", function() {
    it("should return result of subtracting two numbers without braces", function() {
        should(parser.calc("3-1")).equal(2);
    });

    it("should return result of subtracting two numbers with braces", function() {
        should(parser.calc("(3-1)")).equal(2);
    });

    it("should return result of subtracting two numbers with dots", function() {
        should(parser.calc("3.1-1")).equal(2.1);
    });
});

describe("multiplication operator", function() {
    it("should return result of multiplication two numbers without braces", function() {
        should(parser.calc("2*2")).equal(4);
    });

    it("should return result of multiplication two numbers with braces", function() {
        should(parser.calc("(2*2)")).equal(4);
    });

    it("should return result of multiplication two numbers with dots", function() {
        should(parser.calc("2.1*2")).equal(4.2);
    });
});

describe("division operator", function() {
    it("should return result of division two numbers without braces", function() {
        should(parser.calc("1/2")).equal(0.5);
    });

    it("should return result of division two numbers with braces", function() {
        should(parser.calc("(1/2)")).equal(0.5);
    });

    it("should return result of division two numbers with dots", function() {
        should(parser.calc("1.1/2")).equal(0.55);
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

    it("should return result of expression with dots", function() {
        should(parser.calc("1/2 + (5.5 + 4.7) * 5.1")).equal(52.52);
    });

    it("should return result of expression with negatives", function() {
        should(parser.calc("-1/2 + (-5.5 - 4.7) * 5.1")).equal(-52.52);
    });

    it("should return result of expression with rounding", function() {
        should(parser.calc("1+2/3")).equal(1.67);
    });

    it("should return result of expression with rounding (two zeros after comma)", function() {
        should(parser.calc("1+2/45/78/78")).equal(1);
    });

    it("should return result of one number (zero)", function() {
        should(parser.calc("0")).equal(0);
    });

    it("should return result of one number (not zero)", function() {
        should(parser.calc("18")).equal(18);
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