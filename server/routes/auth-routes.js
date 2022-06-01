const router = require("express").Router();
const passport = require("passport");

router.get("/logout", (req, res) => {
  //handle with passport
  req.logout(req.user, (err) => {
    if (err) return next(err);
    res.redirect("http://localhost:3000/");
  });
});

//if login fails
router.get("/login/failed", (req, res) => {
  res.status(401).json({
    sucess: false,
    message: "failure",
  });
});

//if login succeeds
router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      sucess: true,
      message: "successful",
      user: req.user,
      cookies: req.cookies,
    });
  }
});

//auth with twitch
router.get("/twitch", passport.authenticate("twitch"));

router.get(
  "/twitch/redirect",
  passport.authenticate("twitch", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "/login/failed",
  })
);
module.exports = router;
