const mongoose = require('mongoose');
// Stores photo object in binary form
const PhotoSchema = mongoose.Schema({
  photo: {
    type: Buffer
  }
});
PhotoSchema.methods.toJSON = function () {
  const result = this.toObject();
  delete result.photo;
  return result;
};
const Photo = mongoose.model('Photo', PhotoSchema);
module.exports = Photo;
