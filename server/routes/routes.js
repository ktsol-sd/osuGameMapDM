const { sendMap } = require("../map");
const router = require("express").Router();

router.post("/sendMap", (req, res) => {
  let data = req.body;
  if (data.map.length === 0) {
    return res.json({ msg: "Please fill in the field!" });
  } else {
    sendMap(data.map);
    return res.json({ msg: "Map submitted!" });
  }
});

module.exports = router;
