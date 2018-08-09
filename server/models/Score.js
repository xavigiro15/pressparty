var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pressParty');

const scoreSchema = mongoose.Schema({
  name: String,
  value: Number,
})

module.exports = mongoose.model('Score', scoreSchema);
