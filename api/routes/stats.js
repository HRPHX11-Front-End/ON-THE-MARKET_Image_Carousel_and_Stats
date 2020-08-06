const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Stats = require('../models/stats')

router.get('/',
  (req, res, next) => {
    res.status(200).json({
      message: 'Handling GET requests to /stats'
    });
  });

  module.exports = router;