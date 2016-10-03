'use strict';

const fizzBuzz = require('../fizz-buzz');

class FizzBuzzPrinter {

  constructor(range, formatter) {
    this._range = range;
    this._formatter = formatter;
  }

  print() {
    for (let number = this._range.from; number <= this._range.to; number++) {
      this._formatter.format({ number: number, value: fizzBuzz(number) });
    }
  }

}

module.exports = FizzBuzzPrinter;
