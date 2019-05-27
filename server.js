const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const apiroutes = require('./routes/api_route.js');
const passport = require('passport');
const server = express();

server.use(passport.initialize());
server.use(passport.session());
server.use(express.json()) //sets content-type to json
server.use(bodyParser.urlencoded({ extended: true }));
server.use('/', apiroutes);

const connectionString = `mongodb+srv://admin:${process.env.MONGO_ADMIN_PW}@happy-packed-lunches-eg8oh.mongodb.net/test?retryWrites=true`;
mongoose.connect(connectionString,{useNewUrlParser: true})
  .then(()=>{
    server.listen(process.env.PORT);
    console.log('database connected!');})
  .catch(err => console.log(err));

  passport.serializeUser(function(user, cb) {
    cb(null, user.id);
  });
  
  passport.deserializeUser(function(id, cb) {
    User.findById(id, function(err, user) {
      cb(err, user);
    });
  });