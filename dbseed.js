const faker = require('faker');
const mongoose = require ('mongoose');
const Description = require('./api/models/description');
const Stats = require('./api/models/stats');


const dbseed = () => {
  for (var i = 0; i < 100; i++) {

//Description faker source variables
    let randoDescritpion = faker.lorem.paragraph();
    let randoListingAgent = faker.fake("{{name.firstName}} {{name.lastName}}");
    let lastChecked = faker.date.past();
    let lastUpdated = faker.date.past();
    let source = 'ARMLS';

//Stats faker source variables
    let listPrice = faker.finance.amount();
    let estPayment = faker.finance.amount();
    let priceSqFt = faker.finance.amount();
    let status = faker.random.boolean();
    let timeOnRedfin = faker.random.number();
    let propertyType = faker.random.word();
    let yearBuilt = faker.date.past();
    let style = faker.random.word();
    let community = faker.random.word();
    let lotSize = faker.random.number();
    let mlsNum = faker.random.number();

//create ranodm Description document
    let randoDescription = new Description({
      _id: mongoose.Types.ObjectId(),
      description: randoDescritpion,
      listingAgent: randoListingAgent,
      lastChecked: lastChecked,
      lastUpdated: lastUpdated,
      source: source
    });
    randoDescription.save();

//create random Stats document
    let randomStats = new Stats({
      _id: mongoose.Types.ObjectId(),
      listPrice: listPrice,
      estPayment: estPayment,
      priceSqFt: priceSqFt,
      status: status,
      timeOnRedfin: timeOnRedfin,
      propertyType: propertyType,
      yearBuilt: yearBuilt,
      style: style,
      community: community,
      lotSize: lotSize,
      mlsNum: mlsNum
    })
    randomStats.save();
}
}

//function to clear out database and reseed with 100 new Description and Stats documents
const refreshDb = () => {
  Description.remove();
  Stats.remove();
  dbseed();
}

//Uncomment the next line to refresh the databse with new records
//refreshDb();



