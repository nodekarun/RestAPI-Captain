const express = require('express');
const app =express()
const mongoose = require('mongoose')
const product = require('./routes/vendor')
const user = require('./routes/user')

//connect to mongodb
mongoose.connect('mongodb://localhost/winds')
mongoose.Promise = global.Promise

const bodyParser=require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


app.use('/vendor', product);
app.use('/user', user);

module.exports = app;