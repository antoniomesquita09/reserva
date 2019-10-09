const path = require("path");
const fs = require("fs");

class FileController {
  show(req, res) {
    const text = fs.readFileSync(path.resolve(__dirname, "start.txt"), "utf8");
    return res.json({ data: text });
  }
}

module.exports = new FileController();
