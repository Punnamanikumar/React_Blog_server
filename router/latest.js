const express = require("express");
const latestController = require("../controller/latest");

latestRouter = express.Router();

latestRouter.route("/latest").get(latestController.latestGet);
// categoryRouter.route("/view/latest").get(latestController.latestGet);

module.exports = latestRouter;

// http://localhost:8081/api/view/latest
