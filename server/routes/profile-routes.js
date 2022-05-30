const router = require("express").Router();

const authCheck = (req, res, next) => {
  if (!req.user) {
    //if user is not logged in
    res.redirect("http://localhost:3000");
  } else {
    //if logged in
    next();
  }
};

router.get("/", authCheck, (req, res) => {
  //res.send("you are logged in " + req.user.twitchUsername);
  res.redirect("/authorized");
});

module.exports = router;
