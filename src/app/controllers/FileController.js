const path = require("path");
const fs = require("fs");

class FileController {
  index(req, res) {
    if (!req.file) return res.redirect("/");

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
    const invalidPhrasesPath = path.resolve(
      __dirname,
      "..",
      "..",
      "..",
      "tmp",
      "uploads",
      "invalidPhrases.csv"
    );

    const validPhrasesPath = path.resolve(
      __dirname,
      "..",
      "..",
      "..",
      "tmp",
      "uploads",
      "validPhrases.csv"
    );

    if (fs.existsSync(invalidPhrasesPath)) fs.unlinkSync(invalidPhrasesPath);
    if (fs.existsSync(validPhrasesPath)) fs.unlinkSync(validPhrasesPath);

    fs.appendFileSync(
      invalidPhrasesPath,
      `Frases Inválidas, Motivo\n`,
      function(err) {
        if (err) {
          return console.log(err);
        }
      }
    );
    fs.appendFileSync(validPhrasesPath, `Frases válidas\n`, function(err) {
      if (err) {
        return console.log(err);
      }
    });

    const fileText = fs.readFileSync(filePath, "utf8");

    const phraseArray = fileText.split("\n");

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

    const brands = [
      "bradesco",
      "itau",
      "banco do brasil",
      "petrobras",
      "caixa",
      "pao de açucar",
      "vivo",
      "vale",
      "oi",
      "gerdau",
      "skol",
      "sadia",
      "bndes",
      "casas bahia",
      "natura",
      "perdigao",
      "americanas",
      "brahma",
      "ipiranga",
      "tam",
      "embratel",
      "souza cruz	",
      "unimed",
      "net",
      "raizen",
      "embraer",
      "rede globo",
      "globo",
      "schinchariol",
      "nova skin",
      "correios",
      "magazine luiza",
      "aes eletropaulo",
      "eletropaulo",
      "amil",
      "riachuelo",
      "eletrobras",
      "submarino",
      "csn",
      "cemig",
      "braskem",
      "renner",
      "cpfl energia",
      "btg pactual",
      "jbs",
      "casas pernambucanas",
      "ponto frio",
      "cielo",
      "redecard",
      "usiminas",
      "gol",
      "ultragaz",
      "light",
      "banrisul",
      "suzano",
      "all",
      "sanasa",
      "raiadrogasil",
      "elmachips",
      "minerva",
      "tractebel",
      "sabesp",
      "cyrela",
      "odebrecht",
      "comgas",
      "banco do nordeste",
      "bm&f bovespa",
      "marisa",
      "positivo",
      "fibria",
      "abril",
      "semp toshiba",
      "sao martinho",
      "klabin",
      "pdg realty",
      "tecnisa",
      "saraiva",
      "copel",
      "dasa",
      "fertilizantesheringer",
      "havaianas",
      "elektro",
      "duratex",
      "bancomercantil do brasil",
      "totvs",
      "marfrig",
      "hering",
      "mrv engenharia",
      "panamericano",
      "localiza",
      "tigre",
      "amplaenergia",
      "gafisa",
      "arezzo",
      "cesp",
      "estacio",
      "itautec",
      "rossi residencial",
      "cteep",
      "multiplan",
      "anhangueraeducacional",
      "bicbanco",
      "copasa"
    ];

    const badWords = [
      "anus",
      "babaovo",
      "Baba-ovo",
      "babaca",
      "baitola",
      "bicha",
      "bixa",
      "boceta",
      "boiola",
      "bosseta",
      "bosta",
      "brioco",
      "bronha",
      "buceta",
      "bunda",
      "bunduda",
      "burra",
      "burro",
      "busseta",
      "cagado",
      "cagada",
      "cagao",
      "canalha",
      "caralho",
      "cassete",
      "corno",
      "cretina",
      "cretino",
      "cu",
      "culhao",
      "cuzao",
      "debiloide",
      "estupida",
      "escrota",
      "estupido",
      "foda",
      "fode",
      "fudendo",
      "fudido",
      "grelo",
      "idiota",
      "imbecil",
      "idiotice",
      "pau",
      "piranha",
      "piroca",
      "piru",
      "porra",
      "prostituta",
      "prostituto",
      "punheta",
      "puta",
      "puto",
      "rabuda",
      "rabudo",
      "retardada",
      "retardado",
      "rola",
      "safada",
      "safado",
      "vaca",
      "vagabunda",
      "vagabundo",
      "vagina",
      "viada",
      "viado",
      "viadao",
      "xerereca",
      "xereca",
      "xexeca",
      "xoxota",
      "xota",
      "xana",
      "xochota"
    ];

    phraseArray.forEach(filter);

    function filter(item, index) {
      let phrase = item
        .toLowerCase()
        .replace(/á|à|ã|â|ä/g, "a")
        .replace(/é|è|ê|ë/g, "e")
        .replace(/í|ì|î|ï/g, "i")
        .replace(/ó|ò|õ|ö/g, "o")
        .replace(/ú|ù|ü/g, "u");

      if (phrase == "") return;

      let isTooLong = false;

      if (phrase.length > 240) {
        isTooLong = true;
      }

      var isTeam = false;
      var isBrand = false;
      var isBadWord = false;

      for (var i = 0; i < teams.length; i++) {
        var element = teams[i];
        var re = new RegExp(`\\b${element}\\b`, "gi");
        if (phrase.match(re)) {
          isTeam = true;
          break;
        }
      }

      for (var i = 0; i < brands.length; i++) {
        var element = brands[i];
        var re = new RegExp(`\\b${element}\\b`, "gi");
        if (phrase.match(re)) {
          isBrand = true;
          break;
        }
      }
      for (var i = 0; i < badWords.length; i++) {
        var element = badWords[i];
        var re = new RegExp(`\\b${element}\\b`, "gi");
        if (phrase.match(re)) {
          isBadWord = true;
          break;
        }
      }

      if (!!isTeam || !!isBrand || !!isBadWord || !!isTooLong) {
        let reason = "";
        if (!!isTeam) {
          reason = "Time";
        } else if (!!isBrand) {
          reason = "Marca";
        } else if (!!isBadWord) {
          reason = "Palavrão";
        } else {
          reason = "Maior que 240 caracteres";
        }
        fs.appendFileSync(
          invalidPhrasesPath,
          `${phrase}, ${reason}\n`,
          function(err) {
            if (err) {
              return console.log(err);
            }
          }
        );
      } else {
        fs.appendFileSync(validPhrasesPath, `${phrase}\n`, function(err) {
          if (err) {
            return console.log(err);
          }
        });
      }
    }

    fs.unlinkSync(filePath);

    return res.redirect("/download");
  }

  create(req, res) {
    return res.render("addFile/index.njk");
  }

  download(req, res) {
    return res.render("downloadFile/index.njk");
  }

  show(req, res) {
    const { file } = req.params;

    const filePath = path.resolve(
      __dirname,
      "..",
      "..",
      "..",
      "tmp",
      "uploads",
      file
    );

    return res.sendFile(filePath);
  }
}

module.exports = new FileController();
