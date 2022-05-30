const dotenv = require("dotenv");
dotenv.config({ path: ".server/.env" });
const path = require("path");
const cors = require("cors");
const express = require("express");
const routes = require("./routes/routes");
const passportSetup = require("./config/passportSetup");
const mongoose = require("mongoose");

const authRoutes = require("./routes/auth-routes");

mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB Error -> ", err));

const app = express();

app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(express.json());
app.use(cors());

app.use("/", routes);
app.use("/auth", authRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
