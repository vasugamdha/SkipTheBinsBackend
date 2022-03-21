const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json())

const userRoute = require('./api/routes/userRoute');

const mongoUrl = "mongodb+srv://admin:admin@tutorial7.ut32x.mongodb.net/tutorial7DB?retryWrites=true&w=majority";

mongoose.connect(mongoUrl, {useNewUrlParser: true})
.then (() => {
    console.log("Database connection successful");
})
.catch(() => {
    console.log("Error connecting to database");
})

app.use("/", userRoute);

module.exports = app;