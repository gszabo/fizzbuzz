const app = require('./endpoints');

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, function() {
  const address = server.address();
  console.log('app listening', address);
});
