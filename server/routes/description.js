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
            res.send(200, { document: doc });
          });
      },
    );
    res.status(200).json({
      message: 'Handling GET requests to /description',
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
