const express = require("express");
const my_router = express.Router();
const geoInfoController = require("../controllers/geoInfo.controller");
my_router.post("/", geoInfoController.createGeoInfo);

module.exports = my_router;
