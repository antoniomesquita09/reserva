const { Router } = require("express");
const multerConfig = require("./config/multer");
const upload = require("multer")(multerConfig);

const routes = new Router();

const FileController = require("./app/controllers/FileController");

routes.post("/test", upload.single("file"), FileController.index);

routes.get("/", (req, res) => {
  return res.json({ test: "uau" });
});

module.exports = routes;
