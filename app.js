const express = require('express');
const mongoose = require('mongoose');
const { MONGO_ADMIN_PW } = require('./secrets');
const app = express();

app.get('/', (req, res, next)=>{
    res.send('running node api');
});

const connectionString = `mongodb+srv://admin:${MONGO_ADMIN_PW}@happy-packed-lunches-eg8oh.mongodb.net/test?retryWrites=true`;
mongoose.connect(connectionString,{useNewUrlParser: true})
  .then(()=>{
    app.listen(3000);
    console.log('database connected!');})
  .catch(err => console.log(err));