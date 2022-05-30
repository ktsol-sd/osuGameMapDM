const { sendMap, changeName } = require("../osuAPI/map");
const router = require("express").Router();

router.post("/sendMap", (req, res) => {
  let data = req.body;
  if (data.map.length === 0) {
    return res.json({ msg: "Please fill in the field!" });
  } else if (!data.map.includes("https://osu.ppy.sh/beatmapsets/")) {
    return res.json({ msg: "Please add a valid link." });
  } else if (
    data.map.includes("#taiko") ||
    data.map.includes("#fruits") ||
    data.map.includes("#mania")
  ) {
    toast.error("Please add a valid link");
  } else {
    sendMap(data.map);
    return res.json({ msg: "Map submitted!" });
  }
});

// router.post("/sendName", (req, res) => {
//   let data = req.body;
//   if (data.userToDM.length === 0) {
//     return res.json({ msg: "Please fill in the field!" });
//   } else {
//     changeName(data.userToDM);
//     // console.log(data.userToDM);
//     return res.json({ msg: "Name changed!" });
//   }
// });

module.exports = router;
