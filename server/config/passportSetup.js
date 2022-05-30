const passport = require("passport");
const TwitchStrategy = require("passport-twitch-new").Strategy;
const GoogleStrategy = require("passport-google-oauth20");
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
      clientID: process.env.TWITCH_CLIENT,
      clientSecret: process.env.TWITCH_SECRET,
      callbackURL: "/auth/twitch/redirect",
      scope: "user_read",
    },

    () => {
      // passport callback function
    }
  )
);
