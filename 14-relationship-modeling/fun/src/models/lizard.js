import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  name: { type: String, required: true },
  terrarium: { type: Schema.Types.ObjectId, ref: 'Terrarium'},
});

const model = mongoose.model('lizard', schema);

export default model;