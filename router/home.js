// home route
const express = require("express");
const homeControllers = require("../controller/homeController");

const router = express.Router();
// to add user details
router.get("/recentsearches", homeControllers.HotelContro);
router.get("/mostsearches", homeControllers.MostSearchContro);
router.get("/topreviews", homeControllers.TopReviewsContro);
router.get("/best", homeControllers.BestContro);
router.get("/lowestprice", homeControllers.LowestPriceContro);
router.get("/moststars", homeControllers.MostStarsContro);
router.get("/more", homeControllers.moreContro);

module.exports = router;
