import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  name: String,
  abbrev: String,
});

const model = mongoose.model('State', schema);

export default model;