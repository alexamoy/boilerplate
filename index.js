const app = require('./server');
const db = require('./server/db');

const port = process.env.PORT || 1337;

db.sync().then(function() {
  app.listen(port);
  console.log('Listening on PORT: '+ port);
});

