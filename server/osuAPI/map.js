const bancho = require("bancho.js");
const nodesu = require("nodesu");

// const changeName = (inputName) => {
//   try {
//     const client = new bancho.BanchoClient({
//       username: process.env.OSU_USERNAME || "-Velfina-",
//       password: process.env.OSU_PWD || "710a2a93",
//     });
//     client.connect().then(() => {
//       const nameChanged = client.getUser(inputName).ircUsername;
//       setOsuIGN(nameChanged);
//       console.log(nameChanged, " in map.js");
//       return nameChanged;
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

const sendMap = (inputMap) => {
  try {
    const fullMapLink = inputMap;
    const mapID = fullMapLink.split("/");

    const client = new bancho.BanchoClient({
      username: process.env.OSU_USERNAME,
      password: process.env.OSU_PWD,
    });
    client.connect().then(async () => {
      const userToDM = client.getUser("-Velfina-");
      const api = new nodesu.Client(process.env.API_KEY);
      const mapInfo = await api.beatmaps.getByBeatmapId(mapID);
      // console.log(mapInfo);
      const songTitle = mapInfo[0]["title"];
      const artistName = mapInfo[0]["artist"];
      const diffName = mapInfo[0]["version"];
      const finalMessage =
        "[" +
        fullMapLink +
        " " +
        artistName +
        " " +
        "-" +
        " " +
        songTitle +
        " " +
        "[" +
        diffName +
        "]" +
        "]";
      console.log(finalMessage);
      userToDM.sendMessage(finalMessage).catch(console.error);
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { sendMap };
