const dotenv = require("dotenv");
dotenv.config({ path: ".server/.env" });
const path = require("path");
const cors = require("cors");
const express = require("express");
const routes = require("./routes/routes");

const app = express();

app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(express.json());
app.use(cors());

app.use("/", routes);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
