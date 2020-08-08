const express = require('express');
const router = express.Router();
//const mongoose = require('mongoose');

const Description = require('../models/description')

router.get('/', async (req, res, next) => {

    try {
    //pull random Description from db collection Description
      await Description.countDocuments().exec(
      function(err, count) {
        var random = Math.floor(Math.random() * count)
        Description.findOne().skip(random)
        .then(doc => {
          console.log('doc', doc);
          res.send({ document: doc })
        })
      })
   } catch (err) {
     console.log(err);
   }
})


module.exports = router;