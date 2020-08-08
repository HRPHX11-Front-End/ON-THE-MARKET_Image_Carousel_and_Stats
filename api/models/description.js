const mongoose = require ('mongoose');

const descriptionSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  description: String,
  listingAgent: String,
  lastChecked: String,
  lastUpdated: String,
  source: String

});

module.exports = mongoose.model('Description', descriptionSchema)
