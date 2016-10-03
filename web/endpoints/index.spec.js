'use strict';

const request = require('co-supertest');
const app = require('./');
const { expect } = require('chai');

describe('Web FizzBuzz List API endpoint', function() {

  it('should respond with 200 status code', function(done) {
    request(app).get('/api/list?from=2&to=3').expect(200).end(done);
  });

  it('should respond with text/plain', function(done) {
    request(app)
      .get('/api/list?from=2&to=3')
      .expect('Content-Type', /text\/plain/)
      .end(done);
  });

  it('should respond with the fizz-buzz values between from and to', function(done) {
    request(app).get('/api/list?from=9&to=10').expect('9 - Fizz\n10 - Buzz').end(done);
  });

});
