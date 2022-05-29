// const dotenv = require("dotenv");
// dotenv.config({ path: ".server/.env" });
const path = require("path");
const cors = require("cors");
const express = require("express");
const routes = require("./routes/routes");
const mongoose = require("mongoose");

const app = express();

app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(express.json());
app.use(cors());

mongoose
  .connect(
    process.env.DATABASE ||
      "mongodb+srv://sadonemsi:uKzcczPlwpGgCiSP@osumaprequest.lthwm.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB Error -> ", err));

app.use("/", routes);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
