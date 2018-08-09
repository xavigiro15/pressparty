const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pressParty')

const db = mongoose.connection;
db.on('open', () => {
  console.log('Connected to db');
});

module.exports = db;
