const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const apiroutes = require('./routes/api_route.js');
const server = express();

server.use(express.json()) //sets content-type to json
server.use('/', apiroutes);

const connectionString = `mongodb+srv://admin:${process.env.MONGO_ADMIN_PW}@happy-packed-lunches-eg8oh.mongodb.net/test?retryWrites=true`;
mongoose.connect(connectionString,{useNewUrlParser: true})
  .then(()=>{
    server.listen(process.env.PORT);
    console.log('database connected!');})
  .catch(err => console.log(err));