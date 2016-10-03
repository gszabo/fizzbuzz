'use strict';

class Formatter {

  constructor() {
    this._messages = [];
  }

  format({ number, value }) {
    this._messages.push(`${number} - ${value}`);
  }

  getMessage() {
    return this._messages.join('\n');
  }

}

module.exports = Formatter;
