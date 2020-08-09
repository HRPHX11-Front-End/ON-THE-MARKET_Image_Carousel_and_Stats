const faker = require('faker');
const mongoose = require ('mongoose');
const Description = require('./api/models/description');
const Stats = require('./api/models/stats');


const dbseed = () => {
  for (var i = 0; i < 100; i++) {

//Description faker source variables
    let randoDescritpion = faker.lorem.paragraph();
    let randoListingAgent = faker.fake("{{name.firstName}} {{name.lastName}}");
    let randoListingFirm = faker.company.companyName();
    let lastChecked = hoursPast();
    let lastUpdated = lastUp();
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
      listingFirm: randoListingFirm,
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
refreshDb();


//function to format lastUpdated date/time
function lastUp() {
  let currDateTime = new Date();
  let date = faker.date.between('2020-01-15', currDateTime);
  date = date.toString();
  date = date.substring(4, 15);
  let monthDay = date.substring(0, 6)
  let year = date.substring(7)
  return `${monthDay}, ${year}`;
}

//fucntion to find how many hours ago a property was last checked
function hoursPast() {
  let date1 = faker.date.recent();
  let date2 = new Date();

  var diff =(date2.getTime() - date1.getTime()) / 1000;
  diff /= (60 * 60);
  return Math.abs(Math.round(diff));
}


