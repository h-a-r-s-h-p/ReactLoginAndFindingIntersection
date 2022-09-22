const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/routes')
const app = express();
app.use(express.json());

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

app.use('/', routes)
require('dotenv').config();
const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})
database.once('connected', () => {
    console.log('Database Connected')
})


app.listen(3001, () => {
    console.log(`Server Started at ${3001}`)
})
