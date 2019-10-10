const path = require("path");
const fs = require("fs");

class FileController {
  index(req, res) {
    const { filename: file } = req.file;

    const filePath = path.resolve(
      __dirname,
      "..",
      "..",
      "..",
      "tmp",
      "uploads",
      file
    );
    const fileText = fs.readFileSync(filePath, "utf8");

    const phraseArray = fileText.split("\n");

    // console.log(phraseArray);

    const teams = [
      "flamengo",
      "santos",
      "palmeiras",
      "corinthians",
      "sao paulo",
      "internacional",
      "gremio",
      "bahia",
      "athletico-pr",
      "goias",
      "atletico-mg",
      "botafogo",
      "fortaleza",
      "vasco",
      "fluminense",
      "csa",
      "ceara",
      "cruzeiro",
      "avai",
      "chapecoense"
    ];

    /* var i;
    for (i = 0; i < phraseArray.length; i++) {
      // text += cars[i] + "<br>";
      console.log(phraseArray[i]);
      function checkTeams(phrase) {
        return phrase == "1111";
      }
      if (phraseArray.find(checkTeams)) console.log("tem 1");
    } */

    phraseArray.forEach(filter);

    function filter(item, index) {
      let phrase = item
        .toLowerCase()
        .replace(/á|à|ã|â/g, "a")
        .replace(/é|è|ê/g, "e")
        .replace(/í|ì/g, "i")
        .replace(/ó|ò|õ/g, "o");

      // console.log(phrase);
      let isTeam = false;
      isTeam = teams.find(element => element === phrase);
      // console.log(`Nome de time: ${phrase}\n`);
      //return false

      const invalidPhrasesPath = path.resolve(
        __dirname,
        "..",
        "..",
        "..",
        "tmp",
        "uploads",
        "invalidPhrases"
      );

      if (isTeam) {
        fs.writeFile(invalidPhrasesPath, `${isTeam}\n`, function(err) {
          if (err) {
            return console.log(err);
          }

          console.log("The file was saved!");
        });
      }
    }

    // const filePath = path.resolve(__dirname, file);

    // console.log(filePath);

    // const text = fs.readFileSync(filePath, "utf8");

    // console.log(text);

    fs.unlinkSync(filePath);

    return res.json({ data: "good" });
  }
}

module.exports = new FileController();
