const mongoose = require ('mongoose');

const statsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  listPrice: Number,
  estPayment: Number,
  priceSqFt: Number,
  status: Boolean,
  timeOnRedfin: Number,
  propertyType: String,
  yearBuilt: Date,
  style: String,
  community: String,
  lotSize: Number,
  mlsNum: Number
});

module.exports = mongoose.model('Stats', statsSchema)
