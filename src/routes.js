const { Router } = require("express");
const multerConfig = require("./config/multer");
const upload = require("multer")(multerConfig);

const routes = new Router();

const FileController = require("./app/controllers/FileController");

routes.post("/upload", upload.single("file"), FileController.index);

routes.get("/", FileController.create);

routes.get("/download", FileController.download);

routes.get("/files/:file", FileController.show);

module.exports = routes;
