/**
 * put your server bootstrap code here
 * E.g. require dotenv, configure mongoose, start your server, etc. 
 * Note: keep this separate from app.js for easier testing
 * */
'use strict';

require('dotenv').config();

require('babel-register');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

require('./src/app.js').start(process.env.PORT);