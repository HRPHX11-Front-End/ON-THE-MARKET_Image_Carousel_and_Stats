const express = require('express');

const router = express.Router();
const Description = require('../../dbase/models/description');

router.get('/', async (req, res) => {
  try {
  // pull random Description from db collection Description
    await Description.countDocuments().exec(
      (err, count) => {
        const random = Math.floor(Math.random() * count);
        Description.findOne().skip(random)
          .then((doc) => {
            res.status(200).send({ document: doc });
          });
      },
    );
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
