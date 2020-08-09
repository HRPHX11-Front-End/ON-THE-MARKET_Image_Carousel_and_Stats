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
    let listPrice = formatMoney(faker.finance.amount(300000, 600000));
    let estPayment = estPayments(listPrice);
    let priceSqFt = formatMoney(faker.finance.amount(180, 300));
    let status = propStatus(faker.random.boolean());
    let timeOnRedfin = faker.random.number({min: 0, max: 200});
    let propertyType = 'Single Family Detached';
    let yearBuilt = yrBuilt(faker.date.between('1950', '2018'));
    let style = houseStyle();
    let community = faker.random.words(2);
    let lotSize = addCommas(faker.random.number({min:3000, max:15000}));
    let mlsNum = faker.random.number({min:1000000, max:9999999});

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
  Description.remove(function(err, removed) {
    console.log(removed);
  })
  Stats.remove(function(err, removed) {
    console.log(removed);
  })
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

//function to format yearBuilt date/time
function yrBuilt(dateTime) {
  dateTime = dateTime.toString();
  return dateTime = dateTime.substring(11, 15);
}

//fucntion to find how many hours ago a property was last checked
function hoursPast() {
  let date1 = faker.date.recent();
  let date2 = new Date();

  var diff =(date2.getTime() - date1.getTime()) / 1000;
  diff /= (60 * 60);
  return Math.abs(Math.round(diff));
}

//function to determine propStatus from boolean
function propStatus(bool) {
  if (bool) {
    return 'Active'
  } else {
    return 'Pending Offer'
  }
}

//function to get espPayment based on listPrice
function estPayments(val) {
  val = val.replace(',', '')
  val = parseInt(val) * .004;
  val = formatMoney(val);
  return val;
}

function houseStyle() {
  let styles = ['Ranch', 'Contemporary', 'Craftman', 'Modern']
  return styles[Math.floor(Math.random() * styles.length)];
}

//function to add commas to Numbers
function addCommas(val) {
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//function to format money values
function formatMoney(amount, decimalCount = 0, decimal = ".", thousands = ",") {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? "-" : "";

    let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
    let j = (i.length > 3) ? i.length % 3 : 0;

    return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
  } catch (e) {
    console.log(e)
  }
};

