const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Description = require('../models/description')

router.get('/',
  (req, res, next) => {
    res.status(200).json({
      message: 'Handling GET requests to /description'
    });
  });

  module.exports = router;