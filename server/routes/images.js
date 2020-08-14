const express = require('express');

const router = express.Router();
const aws = require('aws-sdk');
const awscredentials = require('../../awsconfig.json');

aws.config.credentials = awscredentials;

// *images/propertyImages/:propId/
// *Route to get all image objects from a specific property folder on S3
router.get('/propertyImages/:propId', async (req, res) => {
  aws.config.setPromisesDependency();
  let randomProperty = `property_${req.params.propId}`;
  randomProperty = randomProperty.replace(':', '');
  try {
    const s3 = new aws.S3();
    const response = await s3.listObjectsV2({
      Bucket: 'fecredfinproductimages',
      Prefix: `${randomProperty}`,
    }).promise();
    // *uncomment next line to see pulled object from S3
    // *console.log({ response: response.Contents})
    res.send({ response: response.Contents });
  } catch (err) {
    console.log('error', err);
  }
});

module.exports = router;
