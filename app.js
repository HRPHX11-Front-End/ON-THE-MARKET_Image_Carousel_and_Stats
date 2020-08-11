const express = require('express');

const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const imagesRoutes = require('./api/routes/images');
const descriptionRoutes = require('./api/routes/description');
const statsRoutes = require('./api/routes/stats');

// *Database connection
mongoose.connect('mongodb://localhost/redfin_cds', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// *Middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('client/dist/'));

// *Routes which should handle requests
app.use('/images', imagesRoutes);
app.use('/description', descriptionRoutes);
app.use('/stats', statsRoutes);

module.exports = app;
