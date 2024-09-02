const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
const morgan = require('morgan');

// routes
const basicUserURL = require('./routes/api/basicUser');
const dogbreedURL = require('./routes/api/dogBreed');
const userDoggyDex = require('./routes/api/userDoggydex');
const imageURL = require('./routes/api/PhotoUpload');
// Enables EXPRESS
const app = express();
// Connect Database
connectDB();

// Init Middleware
app.use(morgan("dev"));
app.use(express.json({ extended: false }));
// cors
app.use(cors({ origin: true, credentials: true }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Router
app.use('/api/basicuser', basicUserURL);
app.use('/api/dogbreed', dogbreedURL);
app.use('/api/userdoggydex', userDoggyDex);
app.use('/api/image', imageURL);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));