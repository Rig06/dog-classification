const jwt = require('jsonwebtoken')
const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const config = require("../../config/auth.config");
const User_Dog = require('../../models/User_DoggyDex');



router.post('/add', (req, res) => {
    console.log(req.body);
    // User_DoggyDex.create({
    //     userId: req.body.userid,
    //     breedid: req.body.breedid,
    // })
    //     .then(res => res.json({msg: "Dog Breed logged to User successfully"}))
    //     .catch( err => res.status(400).json({error: "Couldn't log the dog breed"}));
    const userDog = new User_Dog({
        submittedUserId: req.body.userid,
        doggydexbreedid: req.body.breedid,
    });
    userDog.save().then(
        res => {
            console.log(res);

        }
    ).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err,
        });
    });
});
router.get('/getDogs', (req, res) => {
    // console.log(req.headers['x-access-token']);
    let token = req.headers["x-access-token"];
    if (!token) {
        return res.status(403).send({
            message: "No token provided!"
        });
    }
    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized."
              });
        }
        User_Dog.find({
            submittedUserId: decoded.userId
        })
            .then(
                breedIDs => res.json({ breedIDs })
            ).catch(
                err => res.status(404).json({ error: 'User has no breeds logged' })
            );
    });
});

module.exports = router;







