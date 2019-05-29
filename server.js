const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const apiroutes = require("./routes/api_route.js");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./model/user_model.js");
const server = express();

server.use(express.json()); //sets content-type to json
server.use(session({
  secret: 'happylunches'
}));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(passport.initialize());
server.use(passport.session());
server.use("/", apiroutes);

// Serve static files from the React app
// server.use(express.static(path.join(__dirname, 'client/build')));

const connectionString = `mongodb+srv://admin:${
  process.env.MONGO_ADMIN_PW
}@happy-packed-lunches-eg8oh.mongodb.net/test?retryWrites=true`;
mongoose
  .connect(connectionString, { useNewUrlParser: true })
  .then(() => {
    const port = process.env.PORT || 3001;
    server.listen(port);
    console.log("database connected!\nServer started on port "+port+"\nhttp://localhost:"+port);
  })
  .catch(err => console.log(err));

passport.use(
  new LocalStrategy(function(username, password, done) {
    User.findOne(
      {
        username: username
      },
      function(err, user) {
        if (err) {
          return done(err);
        }

        if (!user) {
          return done(null, false);
        }

        if (user.password != password) {
          return done(null, false);
        }
        return done(null, user);
      }
    );
  })
);

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  User.findById(id, function(err, user) {
    cb(err, user);
  });
});
