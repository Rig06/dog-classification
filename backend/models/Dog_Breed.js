const mongoose = require('mongoose');

const DogBreedSchema = new mongoose.Schema({
  dogbreed: {
    type: String,
    required: true
  },
  breedid: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Dog = mongoose.model('dogbreeds', DogBreedSchema);