// home route
const express = require("express");
const homeControllers = require("../controller/homeController");

const router = express.Router();
// to add user details
router.get("/recentsearches", homeControllers.HotelContro);
router.get("/mostsearches", homeControllers.MostSearchContro);

module.exports = router;
