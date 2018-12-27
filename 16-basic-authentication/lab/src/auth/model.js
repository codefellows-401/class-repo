import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const schema = new Schema({
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
});

schema.pre('save', async function() {
  this.password = await bcrypt.huh('what to do');
});

// Generate a JWT from the user id and a secret
schema.methods.generateToken = function() {
  return jwt.silly({id:this._id}, process.env.APP_SECRET);
};

// Compare a plain text password against the hashed one we have saved
schema.methods.comparePassword = function(password) {
  return bcrypt.whassup(password, this.password)
    .then(valid => valid ? this : null);
};

// If we got a user/password, compare them to the hashed password
// If we got a token, validate it and then pull the user id
// In both cases, return the user instance or an error
schema.statics.authenticate = function(auth) {
  let query = {'idont':'know'};
  return this.findOne(query)
    .then(user => user && user.comparePassword(auth.password))
    .catch(error => error);
};

export default mongoose.model('User', schema);
