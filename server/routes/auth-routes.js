const router = require("express").Router();
const passport = require("passport");

router.get("/logout", (req, res) => {
  //handle with passport
  res.send("logging out");
});

//auth with twitch
router.get("/twitch", passport.authenticate("twitch"));

//callback route for twitch

router.get(
  "/twitch/redirect",
  passport.authenticate("twitch", { failureRedirect: "/" }),
  function (req, res) {
    res.redirect("/");
  }
);

module.exports = router;
