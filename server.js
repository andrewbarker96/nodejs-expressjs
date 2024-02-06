
const express = require('express');
const db = require('./db');

const app = express();

db.connect().then(() => {
  app.listen(3000, function() {
    console.log('App is listening on port 3000');
  });
}).catch(err => {
  console.error('Failed to make database connection!');
  console.error(err);
});