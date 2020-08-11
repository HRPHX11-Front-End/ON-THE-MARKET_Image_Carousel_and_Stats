const faker = require('faker');
const mongoose = require('mongoose');
const Description = require('./api/models/description');
const Stats = require('./api/models/stats');

// *function to seed random descriptions into db
/* eslint-disable */
function descSeed() {
  const tenDescriptions = ["Stunning, Stylish and functional with thoughtful touches everywhere! Not just another flip. As you enter this bright, large and open home with bamboo herringbone flooring, you will immediately notice a great deal of natural light throughout the home. The unique 'bay window' in the Great room will invite you to take a seat and relax. As you pass toward the enormous entertainer's kitchen- you will be pleased with the personable and attentive details including the custom navy and white cabinetry, quartz counters, open shelving, chef's sink, brass hardware, . The real show stopper is the huge master bed/bath featuring an enclosed steam shower/ freestanding tub that feels like a spa! LOCATION LOCATION! Located in the Campus Vista Historic district so much charm and shade from mature trees everywhere you walk. An incredible feel of 'urban suburban' you can literally walk to get your groceries, fine dining, Encanto park, St Joseph hospital, Phoenix collage and so much more. So many updates, simply too many to list-practically a new build! Other than some of the foundation and brick walls everything has been rebuilt. Over 800 SQFT added, New Electrical system and wiring, new plumbing lines and drains, new framing and all drywall, a brand new Home! A new A/C, windows, roof, carport, bathrooms, kitchen, bamboo flooring, expansive laundry room, covered back patio, landscaping (large backyard!), lighting, NOTHING has been left untouched. Check out our virtual tour and 3D video. Schedule your showing today. AC is on cold drinks in the fridge.", "Re-vitalized home on the inside and out that is BUILT for AZ with a brand new HVAC system and ductwork! Newer Roof! WOW! Inside you will love the brand new kitchen with quartz counters and backsplash. The cabinets are all soft-shut in the kitchen. There is LED lighting throughout the house. The house is complimented by custom tile work on the bathrooms and new tile on the floors. It also has room to grow in the backyard! There is new carpet and fresh paint throughout. Great location, great condition, GREAT HOUSE!", "Stunning remodel near Dreamy Draw with gorgeous mountain view. Fully updated with new white kitchen cabinets, granite counter tops, coordinating back splash, under cabinet lighting, over the range pot filler & SS appliances. Large family room w/ built in desk & dining area. 14''x29'' tile throughout home. Surround sound in living room. Bathrooms have all new tile, cabinets & fixtures. New roof. Water filtration for the entire home. New dual pane/low-E windows. Copper lines. A/C is 2 years old. All new lighting throughout. Dusk to dawn lighting in front w/ irrigation timer & new flagstone retaining wall. Large rear patio perfect for entertaining. Detached laundry with tons of storage. Extra storage shed in backyard. 8'' block construction w/ vinyl siding & double insulation.", "Bring your SWIM suit this house is HOT! Conveniently positioned with quick access to all of North Phoenix in the heart of the Phoenix Mountain Preserves! Great Hiking, Parks, and bike paths within walking distance. Community is a Gem with great views from atop the neighborhood hills! Upgraded home with Newer Flooring, 2 year old A/C and Roof, Sport Court and plenty of parking for your toys including a 220v connect for RV on side of house. Backyard OASIS with pool, water slide, barbecue area, fire place chiminea, monkey bars, outdoor speakers, lighting and sport court all surrounded by Palm Trees! As you walk into the home you are greeted with an open great room and stairs leading to your bedroom retreats walking through the room opens to a quaint living space and upgraded kitchen!", "Beautifully remodeled mid-century ranch with MOUNTAIN VIEWS on roomy lot. This dream kitchen features quartz countertops, shaker cabinets, and 5-burner gas range. You'll love the huge walk-in pantry, great natural lighting & in-home office! Outside you'll find mature shade trees, a covered patio, & RV gate. Located in coveted Sunnyslope High School district. Close to highways, hiking, bike trails & North Central restaurants!", "Beautiful home nestled in the heart of Tempe! This home has been fully remodeled with many chic designer upgrades. New flooring throughout the home. Spacious master retreat with gorgeous en-suite bathroom, dual vanity, new shower, and large walk-in closet. Large great room with vaulted ceilings, separate sitting area, and charming fireplace. Covered patio overlooks a large backyard oasis complete with a sparkling pool, brand new artificial turf, and outdoor fire-pit! Close to the 101 and other major freeways. Don't miss out on this wonderful opportunity!", "Beautiful, updated home in the coveted Shalimar neighborhood near the golf course. Enter into your own private courtyard to relax by the pool. French doors welcome you to the open floor plan with newly renovated kitchen and bathrooms. New windows and sliders throughout, light filled atrium and an additional sun room perfect for your home gym or hobby space. This home is one of a kind and with NO HOA, perfect central location near freeways, ASU and the airport. Low maintenance yard, citrus trees, new roof and water heater-schedule your showing before it's gone!", "Don't miss this incredible home available in highly sought after Pointe Tapatio. You will love living in this amazing resort style community, nestled just across the street from popular North Mountain Park and offering amenities including a pool, spa and clubhouse. Inside you will find a spacious open floor-plan with vaulted ceilings and a sunken living area. Recently updated carpets and wood look laminate flooring. Upgraded kitchen with newer granite counter-tops, sink and dishwasher. Recently added sunscreens on windows. AC unit recently replaced. Owned solar for water heater will save on utilities. All conveniently located near freeways, shopping, restaurants and everything central Phoenix has to offer. This one will sell fast. See it and make it yours.", "Could this be love? A rare opportunity to own a North Central Phoenix home! Fantastic modern elements in this upgraded mid-century charmer create an inviting atmosphere that truly feels like home. The open floor plan is perfect for entertaining - French doors open to a large covered patio with stone pavers and an outdoor wet bar. Just imagine how great your next party or weekend barbecue could be! The lush green landscaping has plenty of space for a man cave, she shed, or even a POOL! Neutral tile flooring throughout with NEW carpet in all the bedrooms. Plus, dual sinks, large walk in closet, and a fantastic kitchen with large center island. Centrally located in a desirable community and close to great schools, shopping, and dining.", "TROPICAL PARADISE WITH MOUNTAIN VIEWS IN PRESTIGIOUS MOON VALLEY! Just blocks to Phoenix Mountain Preserve, this home boasts welcoming curb appeal and backyard mountain views. You'll enter into the great room featuring beamed vaulted ceilings, a 2-way fireplace, and a view of your backyard paradise. The kitchen is smartly-designed with a breakfast bar and dining table. The master bedroom is split and rooms are generously sized with roomy closets. You won't want to leave your resort-like backyard. The pool was just re-tiled entirely with deep blue mosaic tiles - spectacular upgrade! The waterfall begs you to relax and stay awhile. Watch Sunday football under the gazebo or lounge on the patio - so many options you must see! An RV gate provides room for toys and there is also an area for a garden or dog run. This home is waiting for you to to add your special touches and begin the next chapter of your journey!", "Great curb appeal for this remodeled 1950's Bungalow! Nice front lawn with beautiful shade trees. Enter to a formal living room. Interior has been freshly painted. High ceilings and wide hallways. The new galley style kitchen has white shaker cabinets, granite counters, new undermount sink, new SS appliances and subway tile backsplash. Dining area has laminate wood floors and new french doors to the patio. The family room has a cozy fireplace and built-in shelves. The owners suite has a whole new bathroom with a new vanity, toilet and tiled step-in shower. Generous sized secondary bedrooms. Hall bathroom remodeled as well. The backyard has a covered patio, RV gates from the alley and a sparkling, newly refinished pool and pool equipment! Easy access to shopping and major freeways. No HOA!", "Charming NEWLY REMODELED home w/ Casita in the heart of Coronado Historic District! Contemporary vibes with open space concept kitchen and living room. Raised ceilings, geometric accent wall, barn door and picturesque windows create a beautiful open space filled with natural light. Wood look tile flooring through entire home. Kitchen features island, custom cabinets with quartz countertops and impeccable stainless steel appliances. Master bedroom, Bedroom 2 & Bedroom 3 each have their own private entrance from covered patio. Master bathroom and Bathroom 2 were both fully remodeled with new toilets, vanities and walk-in showers. Casita located in backyard is a FULLY EQUIPPED studio with a bathroom and kitchen! Perfect for short or long term lease in such a busy neighborhood! Large backyard w/ fire pit is great for outdoor activities. Seven hospitals near by make this the perfect home for healthcare professionals! Walking distance from various local restaurants, coffee shops and cultural activities."];
  return tenDescriptions[Math.floor(Math.random() * tenDescriptions.length)];
}
/* eslint-enable */

// *fucntion to find how many hours ago a property was last checked
function hoursPast() {
  const date1 = faker.date.recent();
  const date2 = new Date();
  let diff = (date2.getTime() - date1.getTime()) / 1000;
  diff /= (60 * 60);
  return Math.abs(Math.round(diff));
}

// *function to format lastUpdated date/time
function lastUp() {
  const currDateTime = new Date();
  let date = faker.date.between('2020-01-15', currDateTime);
  date = date.toString();
  date = date.substring(4, 15);
  const monthDay = date.substring(0, 6);
  const year = date.substring(7);
  return `${monthDay}, ${year}`;
}

// *function to determine propStatus from boolean
function propStatus(bool) {
  if (bool) {
    return 'Active';
  }
  return 'Contingent';
}

// *function to format yearBuilt date/time
function yrBuilt(dateTime) {
  let daTi = dateTime.toString();
  daTi = daTi.substring(11, 15);
  return daTi;
}

// *function to pick a random houseStyle
function houseStyle() {
  const styles = ['Ranch', 'Contemporary', 'Craftman', 'Modern'];
  return styles[Math.floor(Math.random() * styles.length)];
}

// *function to add commas to Numbers
function addCommas(val) {
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '', '');
}

// *function to format money values
/* eslint-disable */
function formatMoney(amount, decimalCount = 0, decimal = '.', thousands = ',') {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
    const negativeSign = amount < 0 ? '-' : '';
    const i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount), 10).toString();
    const j = (i.length > 3) ? i.length % 3 : 0;

    return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : '');
  } catch (e) {
    console.log(e);
  }
}
/* eslint-enable */

// *function to get estPayment based on listPrice
function estPayments(val) {
  let val1 = val.replace(',', '');
  val1 = parseInt(val1, 10) * 0.004;
  val1 = formatMoney(val1);
  return val1;
}

const dbseed = () => {
  for (let i = 0; i < 100; i += 1) {
    // Description faker source variables
    const randoDescritpion = descSeed();
    const randoListingAgent = faker.fake('{{name.firstName}} {{name.lastName}}');
    const randoListingFirm = faker.company.companyName();
    const lastChecked = hoursPast();
    const lastUpdated = lastUp();
    const source = 'ARMLS';

    // *Stats faker source variables
    const listPrice = formatMoney(faker.finance.amount(300000, 600000));
    const estPayment = estPayments(listPrice);
    const priceSqFt = formatMoney(faker.finance.amount(180, 300));
    const status = propStatus(faker.random.boolean());
    const timeOnRedfin = faker.random.number({ min: 0, max: 200 });
    const propertyType = 'Single Family Detached';
    const yearBuilt = yrBuilt(faker.date.between('1950', '2018'));
    const style = houseStyle();
    const community = faker.random.words(2);
    const lotSize = addCommas(faker.random.number({ min: 3000, max: 15000 }));
    const mlsNum = faker.random.number({ min: 1000000, max: 9999999 });

    // *Create ranodm Description document
    const randoDescription = new Description({
      _id: mongoose.Types.ObjectId(),
      description: randoDescritpion,
      listingAgent: randoListingAgent,
      listingFirm: randoListingFirm,
      lastChecked,
      lastUpdated,
      source,
    });
    randoDescription.save();

    // *Create random Stats document
    const randomStats = new Stats({
      _id: mongoose.Types.ObjectId(),
      listPrice,
      estPayment,
      priceSqFt,
      status,
      timeOnRedfin,
      propertyType,
      yearBuilt,
      style,
      community,
      lotSize,
      mlsNum,
    });
    randomStats.save();
  }
};

// function to clear out database and reseed with 100 new Description and Stats documents
// eslint-disable-next-line
const refreshDb = () => {
  Description.remove((err, removed) => (
    console.log(removed)
  ));
  Stats.remove((err, removed) => (
    console.log(removed)
  ));
  dbseed();
};

// *Uncomment the next line to refresh the databse with new records
// *nrefreshDb();
