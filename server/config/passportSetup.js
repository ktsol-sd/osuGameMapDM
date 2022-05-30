const passport = require("passport");
const TwitchStrategy = require("passport-twitch-new").Strategy;
const User = require("../models/user");

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});

//twitch login
passport.use(
  new TwitchStrategy(
    {
      clientID: process.env.TWITCH_CLIENT || "rix8psqzlafi98zp35jtzo3mnksagj",
      clientSecret:
        process.env.TWITCH_SECRET || "a5qf7yh1xeqgoey1id5vk4ybgtumtt",
      callbackURL: "/auth/twitch/redirect",
      scope: "user_read",
    },

    function (accessToken, refreshToken, profile, done) {
      // passport callback function
      console.log(profile);
      console.log("passport callback function");
    }
  )
);
