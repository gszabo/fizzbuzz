'use strict';

const express = require('express');
const app = express();
const Formatter = require('../formatter');
const FizzBuzzPrinter = require('../../fizz-buzz-printer');

app.get('/api/list', function(request, response) {
  const { from, to } = request.query;
  const formatter = new Formatter();
  const printer = new FizzBuzzPrinter({ from: parseInt(from), to: parseInt(to) }, formatter);
  printer.print();
  response.type('text/plain').send(formatter.getMessage());
});

module.exports = app;
