// routes/api/dogbreed.js
const express = require('express');
const router = express.Router();
// Load DogBreed model
const Dog = require('../../models/Dog_Breed');
// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('routes route testing!'));

// @route GET api/dogbreed
// @description Get all Dogbreeds

router.get('/', (req, res) => {
  Dog.find()
    .then(dogbreeds => res.json(dogbreeds))
    .catch(err => res.status(404).json({ nodogbreedfound: 'No dogbreed found' }));
});

// @route GET api/dogbreed/:id
// @description Get single dogbreed by id

router.get('/:id', (req, res) => {
  Dog.find({$or: [
    {dogbreed: req.params.id},
    {breedid: req.params.id}
  ]})
  .then(dog => res.json(dog))
  .catch(err => res.status(404).json({nodogbreedfound: '*** No Dog Found ***'}));
});

// @route GET api/dogbreed
// @description add/save dog breed
router.post('/', (req, res) => {
    Dog.create(req.body)
      .then(dogbreeds => res.json({ msg: 'Dogbreed added successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to add this Dogbreed' }));
  });
  
  
  
  
  // @route GET api/dogbreed/:id
  // @description Update dogbreed
  router.put('/:id', (req, res) => {
    Dog.findByIdAndUpdate(req.params.id, req.body)
      .then(dogbreeds => res.json({ msg: 'Updated successfully' }))
      .catch(err =>
        res.status(400).json({ error: 'Unable to update the Database' })
      );
  });
  // @route GET api/dogbreed/:id
  // @description Delete dogbreed by id
  router.delete('/:id', (req, res) => {
    Dog.findByIdAndRemove(req.params.id, req.body)
      .then(dogbreeds => res.json({ mgs: 'Dogbreed entry deleted successfully' }))
      .catch(err => res.status(404).json({ error: 'No such a dogbreed' }));
  });
  
  module.exports = router;
  
  
  
  
  
    

