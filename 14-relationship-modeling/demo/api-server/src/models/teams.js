'use strict';

const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
  name: {type:String, require:true},
  mascot: {type:String},
});

export default mongoose.model('teams', teamSchema);