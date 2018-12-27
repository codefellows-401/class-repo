import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  location: { type: String, required: true, unique: true},
});

export default mongoose.model('Coop', schema);