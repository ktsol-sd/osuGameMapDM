const passport = require("passport");
const TwitchStrategy = require("passport-twitch-new").Strategy;
const User = require("../models/user");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    console.log(user);
    done(null, user);
  });
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

    function (accessToken, refreshToken, profile, done) {
      //check if user exists in db

      User.findOne({ twitchID: profile.id }).then((currentUser) => {
        if (currentUser) {
          // already have the user
          console.log("user is: ", currentUser);
          done(null, currentUser);
        } else {
          //create new user
          new User({
            twitchUsername: profile.display_name,
            twitchID: profile.id,
            image: profile.profile_image_url,
          })
            .save()
            .then((newUser) => {
              console.log("new user created " + newUser);
              done(null, newUser);
            });
        }
      });
    }
  )
);
