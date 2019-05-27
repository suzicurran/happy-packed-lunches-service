const express = require('express');
const mongoose = require('mongoose');
const apiroutes = require('./routes/api_route.js');
const server = express();

server.use(express.json()) //sets content-type to json
server.use('/', apiroutes);

debugger;
const connectionString = `mongodb+srv://admin:${process.env.MONGO_ADMIN_PW}@happy-packed-lunches-eg8oh.mongodb.net/test?retryWrites=true`;
mongoose.connect(connectionString,{useNewUrlParser: true})
  .then(()=>{
    server.listen(3000);
    console.log('database connected!');})
  .catch(err => console.log(err));