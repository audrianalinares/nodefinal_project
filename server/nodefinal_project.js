const express = require("express");
const bodyParser = require("body-parser");
const {connect, connection} = require("mongoose");

const config = require('./config');

connect(config.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
connection.on('connected', () => console.log('connected to MongoDB'));
const app = express();
app.use(bodyParser.json());
