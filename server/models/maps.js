const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mapsSchema = new Schema(
  {
    mapRequested: {
      type: String,
    },
  },
  { timestamps: true }
);

const Map = mongoose.model("map", mapsSchema);
module.exports = Map;
