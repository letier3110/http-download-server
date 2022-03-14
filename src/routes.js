const express = require("express");
const router = express.Router();
const controller = require("./controller");
const routes = (app) => {
  router.get("/files", controller.getListFiles);
  router.get("/files/:name", controller.download);
  app.use(router);
};
module.exports = routes;
