const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const aws = require('aws-sdk');
const awscredentials = require('../../awsconfig.json')

aws.config.credentials = awscredentials;

const Images = require('../models/images')

router.get('/',
  (req, res, next) => {
    res.status(200).json({
      message: 'Handling GET requests to /images'
    });
  });

router.get('/all', (req, res, next) => {
    Images.find()
    .exec()
    .then(doc => {
      console.log('find() completed')
      res.status(200).json(doc);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({error: err});
  })
});

router.get('/propertyImages', async (req, res, next) => {
    aws.config.setPromisesDependency();
    try {
    const s3 = new aws.S3();
    const response = await s3.listObjectsV2({
      Bucket: 'fecredfinproductimages',
      Prefix: 'property_01'
    }).promise();
    res.json({ response: response.Contents})
  }
   catch(e) {
    console.log('error', e);
  }
});

router.post("/", (req, res, next) => {
  console.log('req body', req.body)
  const product = new Images({
    _id: new mongoose.Types.ObjectId(),
    property_id: req.body.property_id,
    url: req.body.url
  });
  product
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Handling POST requests to /images",
        createdProduct: result
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.get('/:property_id', (req, res, next) => {
    const property_id = req.params.property_id;
    console.log(property_id);
    Images.findOne({ property_id: property_id})
    .exec()
    .then(doc => {
      console.log('from database', doc)
      if(doc) {
        res
        .status(200)
        .json(doc);
      } else {
        res
        .status(404)
        .json({message: "No valid entry found for provided ID"});
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
  })
});

module.exports = router;


