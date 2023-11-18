const express = require('express');
const app = express()
const port = 5000;
const mongoose = require("mongoose");
const mongoUrl = require("./keys");
const cors = require('cors');

app.use(cors())

require('./models/model')
app.use(express.json())
app.use(require("./routes/auth"))
mongoose.connect(mongoUrl);

mongoose.connection.on("connected",()=>{
    console.log("Successfully connected to mongo")
})

mongoose.connection.on("error",()=>{
    console.log("Not connected to mongo")
})

app.listen(port,()=>{
    console.log("Server is running on port "+port);
});