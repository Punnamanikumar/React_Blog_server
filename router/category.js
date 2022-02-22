const express = require("express");
const categoryController = require("../controller/category");
const latestController = require("../controller/latest");

categoryRouter = express.Router();

categoryRouter.route("/blog").get(categoryController.categoryGet);
categoryRouter.route("/blog/:category").get(categoryController.categoryGet);
categoryRouter.route("/:latest").get(latestController.latestGet);

module.exports = categoryRouter;
