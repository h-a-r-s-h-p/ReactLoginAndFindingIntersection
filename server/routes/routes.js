const express = require('express');
const router = express.Router()
const Model = require('../model/model');
module.exports = router

//Post Method
router.post('/post', async(req, res) => {
    const data = new Model({
        email: req.body.email,
        password: req.body.password
    })
    try{

        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }

    catch(error){
        res.status(400).json({message:error.message})
    }
})

//Get all Method
router.get('/getAll', async(req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
})

//Get by email Method
router.get('/getOne/:email', async(req, res) => {
    try{
        const data = await Model.findOne({email:req.params.email})
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by email Method
router.patch('/update/:email', async(req, res) => {
    try{
        const email = req.params.email;
        const updatedData = req.body;
        const options = {new: true};

        const result = await Model.findOneAndUpdate(
            {email : email},
            updatedData,
            options )
        res.send(result)
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})