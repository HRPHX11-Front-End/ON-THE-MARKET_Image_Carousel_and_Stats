const mongoose = require('mongoose');

const statsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  listPrice: String,
  estPayment: String,
  priceSqFt: Number,
  status: String,
  timeOnRedfin: Number,
  propertyType: String,
  yearBuilt: String,
  style: String,
  community: String,
  lotSize: String,
  mlsNum: Number,
});

module.exports = mongoose.model('Stats', statsSchema);
