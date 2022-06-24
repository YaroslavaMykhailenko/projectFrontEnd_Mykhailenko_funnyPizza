const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://yaroslava:Slava270602@cluster0.u3jljpr.mongodb.net/funny-pizza'
mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser:true})
var db = mongoose.connection

db.on('connected', ()=>{
    console.log('Mongo DB Connection Successful')
})

db.on('error', ()=>{
    console.log('Mongo DB Connection failed')
})
module.exports = mongoose