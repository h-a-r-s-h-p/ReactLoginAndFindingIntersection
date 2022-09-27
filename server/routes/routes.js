const express = require('express');
const router = express.Router()
const Model = require('../model/model');
module.exports = router
const helper = require("../helper/helper")

const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

//SignIn
router.post('/signin', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');          // added in each api to handle cors error 
    let jwtSecretKey  = process.env.SECRET_KEY
    const data = await Model.findOne({
        email: req.body.email
    })
    if (!data) {
        return res.send({ message: "User Not Registered." })
    }

    const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        data.password
    )

    if (!passwordIsValid) {
        return res.send({
            accessToken: null,
            message: "Incorrect Password"
        })
    }

    var token = jwt.sign({ email: data.email }, jwtSecretKey, {
        expiresIn: 86400 //24 hr
    })

    res.status(200).send({
        email: data.email,
        accessToken: token,
        message: "Successfully LoggedIn"
    })
})

//Registration
router.post('/jwtregister', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');          // added in each api to handle cors error 
    const data = await Model.findOne({
        email: req.body.email
    })
    if (!data) {
        const user = new Model({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password,)
        })

        await user.save()
        res.send({message:"User registered successfully. Please login now."})
    }
    else{
        res.send({message:"User already registered."})
    }

})

//Post Method
router.post('/register', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');          // added in each api to handle cors error 
    console.log("data received = ", req)
    const data = new Model({
        email: req.body.email,
        password: req.body.password
    })
    try {

        const dataToSave = await data.save();
        console.log("data saved = ", dataToSave)
        res.status(200).json(dataToSave)
    }

    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get by email Method
router.post('/verifyUser', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Headers', '*')
    res.set("Access-Control-Allow-Credentials", "true")
    try {
        console.log("requested email = " + req.body.email)
        const data = await Model.findOne({ email: req.body.email })
        console.log("data = " + data)
        if (data === null) {
            res.json(null)
        }
        else {
            const passwordsMatches = helper.VerifyPassword(data, req.body);
            if (passwordsMatches) {
                res.json(data);
            }
            else {
                res.json("Incorrect Password!")
            }
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get all Method
router.get('/getAll', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Update by email Method
router.patch('/update/:email', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    try {
        const email = req.params.email;
        const newPassword = req.body.newPassword;
        const options = { new: true };

        const result = await Model.findOneAndUpdate(
            { email: email },
            { password: newPassword },
            options)
        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send('Delete by ID API')
})