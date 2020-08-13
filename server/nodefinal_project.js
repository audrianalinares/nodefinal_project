const express = require("express");
const bodyParser = require("body-parser");
const {connect, connection} = require("mongoose");
const cors = require("cors");
const path = require("path");
const config = require('./config');

connect(config.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
connection.on('connected', () => console.log('connected to MongoDB'));
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path,join(__dirname,"..", "client/build")));

app.get('*',(req,res) =>{
    res.sendFile(path.join(__dirname,"..","client/build/index.html"));
});

const PORT = 5005;
app.listen(PORT.() => console.log(`server running on port ${PORT}`);


