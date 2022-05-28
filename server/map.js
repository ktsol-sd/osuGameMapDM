const bancho = require("bancho.js");
const nodesu = require("nodesu");

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

      // const message = getMapInfo(mapID);
      // console.log(finalMessage);
      // const requestMessage = new bancho.OutgoingBanchoMessage(
      //   client,
      //   userToDM,
      //   finalMessage
      // );
      // requestMessage.send();
    });
  } catch (err) {
    console.log(err);
  }
};

// const getMapInfo = async (mapCode) => {
//   const api = new nodesu.Client("2106d03070b09facc84d590d0f25d4c9177fff5a");
//   const mapInfo = await api.beatmaps.getByBeatmapId(mapCode);
//   const songTitle = mapInfo[0]["title"];
//   const artistName = mapInfo[0]["artist"];
//   const diffName = mapInfo[0]["version"];
//   const finalMessage =
//     "[" +
//     fullMapLink +
//     " " +
//     artistName +
//     " " +
//     "-" +
//     " " +
//     songTitle +
//     " " +
//     "[" +
//     diffName +
//     "]" +
//     "]";
//   return finalMessage;
// };

module.exports = { sendMap };
