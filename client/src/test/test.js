require("chai").should();

const validParens = require("../index.js");

describe("Valid Parentheses", function() {
  it('should return true when passed "()"', function() {
    validParens("()").should.eql(true);
  });

  it('should return false when passed "())"', function() {
    validParens("())").should.eql(false);
  });

  it('should return false when passed ")(()))"', function() {
    validParens(")(()))").should.eql(false);
  });

  it('should return false when passed "("', function() {
    validParens("(").should.eql(false);
  });

  it('should return true when passed "(())(((())((()())())()((())((((())((()())()))())())))())"', function() {
    validParens(
      "(())(((())((()())())()((())((((())((()())()))())())))())"
    ).should.eql(true);
  });

  it('should return false when passed "(())(((())((()())())()((())(((((())((()())()))())())))())"', function() {
    validParens(
      "(())(((())((()())())()((())(((((())((()())()))())())))())"
    ).should.eql(false);
  });
});
