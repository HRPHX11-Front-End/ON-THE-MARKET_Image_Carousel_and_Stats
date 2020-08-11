const express = require('express');

const router = express.Router();
const Stats = require('../models/stats');

router.get('/', async (req, res) => {
  try {
  // pull random Description from db collection Description
    await Stats.countDocuments().exec(
      (err, count) => {
        const random = Math.floor(Math.random() * count);
        Stats.findOne().skip(random)
          .then((doc) => {
            res.send({ stats: doc });
          });
      },
    );
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
