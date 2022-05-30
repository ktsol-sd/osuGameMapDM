const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    twitchID: {
      type: String,
      trim: true,
      required: true,
    },
    image: {
      url: String,
      public_id: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", userSchema);
