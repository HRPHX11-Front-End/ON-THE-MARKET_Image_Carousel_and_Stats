const mongoose = require ('mongoose');

const statsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  property_id: Number,
  url: String
});

module.exports = mongoose.model('Stats', statsSchema)
