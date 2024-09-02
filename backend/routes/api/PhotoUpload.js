const express = require('express');
const multer = require('multer'); // Middleware to upload img files
const Photo = require('../../models/Photo');
const router = express.Router();
//========= Upload, store, retrieve and delete an image ==============
const upload = multer({
  limits: {
    fileSize: 1024 * 1024 * 5 // max file size: ~ 5.3MB = 5.2m bytes
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg|png)$/)) { // The three img-file extensions that can be handled
      cb(new Error('only upload files with jpg, jpeg or png format.'));
    }
    cb(undefined, true); // continue with upload
  }
});
// From front-end, route: api/image/upload 
router.post('/upload', upload.single('image'), async (req, res) => {
    try {
      const photo = new Photo(req.body);
      const file = req.file.buffer;
      photo.photo = file;
      await photo.save();// Image is sent to MongoDB
      res.status(201).send({ _id: photo._id }); // Returns Photo obj back to caller.
    } catch (error) {
      res.status(500).send({
        upload_error: 'Error while uploading file...Try again later.'
      });
    }
  },
  (error, req, res, next) => {
    if (error) {
      res.status(500).send({
        upload_error: error.message
      });
    }
  }
);
// @route GET (from front-end) api/image/id/<image id...>
// @description get image by id
router.get('/id/:id', async (req, res) => { // Retrieve image
  try {
    const result = await Photo.findById(req.params.id); // Finds image by ID
    res.set('Content-Type', 'image/jpeg'); // Turns binary file into an *jpeg image
    res.send(result.photo); // Returns an *jpeg image
  } catch (error) {
    res.status(400).send({ get_error: 'Error while getting photo.' });
  }
});
// @route delete api/image/delete/:id
// @description Delete image by id
router.delete('/delete/:id', (req, res) => {
    Photo.findByIdAndDelete(req.params.id, req.body)
      .then(user => res.json({ mgs: 'Image entry deleted successfully' }))
      .catch(err => res.status(404).json({ error: 'No image to delete.' }));
  });
module.exports = router;