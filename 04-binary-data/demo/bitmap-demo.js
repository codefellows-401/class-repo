'use strict';

const fs = require('fs');

const buffer = fs.readFileSync(`${__dirname}/baldy.bmp`);


const parsedBitmap  = {};
// type
parsedBitmap.type = buffer.toString('utf-8', 0, 2);
// fileSize
parsedBitmap.fileSize = buffer.readInt32LE(2);
// Bytes Per Pixel
parsedBitmap.bytesPerPixel = buffer.readInt16LE(28);
// Height
parsedBitmap.height = buffer.readInt32LE(22);
// Width
parsedBitmap.width = buffer.readInt32LE(18);

parsedBitmap;
