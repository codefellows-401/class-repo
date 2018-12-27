// this is our logic for the post route

'use strict';

import express from 'express';
import multer from 'multer';

import s3 from '../lib/s3.js';

const uploadRouter = express.Router();

const uploader = multer({ dest: `${__dirname}/../../tmp` });

uploadRouter.post('/upload', uploader.any(), (request, response) => {
  console.log('request.files', request.files);

  if(request.files.length > 1) {
    return 'Too many files';
  }

  let file = request.files[0];
  let key = `${file.filename}:${file.originalname}`;
  // sldkfjasdjflkadflkasjdfkljsdlkfjsd:dog.png

  s3.uploadFile(file.path, key)
    .then(url => {
      let output = { url: url };
      response.send(output);
    })
    .catch(console.error);

});

export default uploadRouter;
