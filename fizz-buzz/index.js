'use strict';

module.exports = function(n) {
  let result = '';
  if (n % 3 === 0) result += 'Fizz';
  if (n % 5 === 0) result += 'Buzz';
  return result !== '' ? result : n.toString();
};
