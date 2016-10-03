'use strict';

const Formatter = require('./');
const { expect } = require('chai');

describe('Web FizzBuzz formatter', function() {

  it('should separate number and value with a dash', function() {
    const formatter = new Formatter();
    formatter.format({ number: 1, value: '1' });
    expect(formatter.getMessage()).to.eql('1 - 1');
  });

  it('should separate formatted pairs with new line', function() {
    const formatter = new Formatter();
    formatter.format({ number: 1, value: '1' });
    formatter.format({ number: 3, value: 'Fizz' });
    expect(formatter.getMessage()).to.eql('1 - 1\n3 - Fizz');
  });

});
