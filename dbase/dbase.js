const mongoose = require('mongoose');

// *Database connection
module.exports = () => {
  mongoose.connect('mongodb://localhost/redfin_cds', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.once('connected', () => {
    console.log('connected to the mongoose server localhost/redfin_cds');
  });
};
