const express = require('express');

const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const imagesRoutes = require('./routes/images');
const descriptionRoutes = require('./routes/description');
const statsRoutes = require('./routes/stats');

// *Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, ('.././client/dist'))));

// *Routes which should handle requests
app.use('/images', imagesRoutes);
app.use('/description', descriptionRoutes);
app.use('/stats', statsRoutes);

module.exports = app;
