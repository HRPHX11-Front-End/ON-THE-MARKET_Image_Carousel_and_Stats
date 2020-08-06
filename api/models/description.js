const mongoose = require ('mongoose');

const descriptionSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  property_id: Number,
  url: String
});

module.exports = mongoose.model('Description', descriptionSchema)
