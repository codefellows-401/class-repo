import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  location: String,
});

const model = mongoose.model('Terrarium', schema);

export default model;