'use strict';

const FizzBuzzPrinter = require('./');
const { expect } = require('chai');

describe('FizzBuzz printer', function() {

  describe('when given one element range', function() {

    it('should print the given number', function() {
      const range = { from: 1, to: 1 };
      const prints = [];
      const formatter = {
        format: function (toFormat) {
          prints.push(toFormat);
        }
      };
      const printer = new FizzBuzzPrinter(range, formatter);
      printer.print();
      expect(prints).to.eql([{ number: 1, value: '1' }]);
    });

  });

  describe('when given a general range', function() {

    it('should print the given number', function() {
      const range = { from: 2, to: 4 };
      const prints = [];
      const formatter = {
        format: function (toFormat) {
          prints.push(toFormat);
        }
      };
      const printer = new FizzBuzzPrinter(range, formatter);
      printer.print();
      expect(prints).to.eql([
        { number: 2, value: '2' },
        { number: 3, value: 'Fizz' },
        { number: 4, value: '4' }
      ]);
    });

  });

});
