const { Router } = require("express");

const routes = new Router();

const FileController = require("./app/controllers/FileController");

routes.get("/test", FileController.show);
routes.get("/", (req, res) => {
  return res.json({ test: "uau" });
});

module.exports = routes;
