require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const shortenerRoute = require('./routes/shortener');


const app = express()
const DB_URL = process.env.MONGODB_URI

const replicaApp = process.env.APP_NAME


app.use(express.json())
app.use("/api", shortenerRoute)
mongoose.connect(DB_URL)
        .then((result) => {
            console.log("Connected to MongoDB");
        })
        .catch((err) => {
            console.log("Error: ", err);
        });

        
app.listen(3000, () => {
        console.log(`${replicaApp} started on port: `, process.env.PORT)
        console.log(`Request served by ${replicaApp}`)
});



