const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const imagesRoutes = require('./api/routes/images');
const descriptionRoutes = require('./api/routes/description');
const statsRoutes = require('./api/routes/stats');

//database connection
mongoose.connect('mongodb://localhost/redfin_cds', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//*Middleware
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('client/dist/'))


//*Headers
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

//*Routes which should handle requests
app.use('/images', imagesRoutes);
app.use('/description', descriptionRoutes);
app.use('/stats', statsRoutes)

//*Default routes
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;