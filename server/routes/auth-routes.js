const router = require("express").Router();
const passport = require("passport");

router.get("/logout", (req, res) => {
  //handle with passport
  res.send("logging out");
});

//auth with twitch
router.get("/twitch", passport.authenticate("twitch"));

//callback route for twitch
router.get("/twitch/redirect", (req, res) => {
  res.send("you reached twitch cb url");
});

module.exports = router;
