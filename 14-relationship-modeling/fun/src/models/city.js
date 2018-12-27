import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  name: String,
  state: { type: Schema.Types.ObjectId, ref: 'State'},
});

const model = mongoose.model('City', schema);

export default model;