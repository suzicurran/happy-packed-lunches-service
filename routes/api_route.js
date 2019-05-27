const express = require("express");
const userController = require("../controller/user_controller");
const router = express.Router();
const passport = require("passport");
const path = require("path");

router.get(
  "/",
  userController.showIndex
);

// temporary login for test purposes
const testAuthFile = path.resolve("./test-auth.html");
router.get("/login", (req, res) => res.sendFile(testAuthFile));
router.get("/success", (req, res) =>
  res.send("Welcome " + req.user.username + "!!")
);
router.get("/error", (req, res) => res.send("error logging in"));

router.post(
  "/",
  passport.authenticate("local", { failureRedirect: "/error" }),
  function(req, res) {
    res.redirect("/success?username=" + req.user.id);
  }
);

// Streak (soon: User?)
router.get("/streak", userController.streak);
router.post("/create", userController.create);
router.patch("/increment", userController.increment);
router.patch("/reset", userController.reset);

module.exports = router;
