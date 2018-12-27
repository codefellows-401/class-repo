// this is the nitty gritty AWS stuff

'use strict';

import fs from 'fs-extra';
import aws from 'aws-sdk';

const s3 = new aws.S3();

const uploadFile = (filepath, key) => {
  let config = {
    Bucket: process.env.AWS_BUCKET,
    Key: key,
    ACL: 'public-read',
    Body: fs.createReadStream(filepath),
  };

  return s3.upload(config)
    .promise()
    .then(result => {
      fs.remove(filepath)
        .then(() => result.Location);
    })
    .catch(err => {
      console.error(err);
      return fs.remove(filepath)
        .then(() => Promise.reject(err));
    });
};

export default { uploadFile };
