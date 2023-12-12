const homeUtil = require("../util/homeUtil");

const HotelContro = (req, res) =>
  homeUtil
    .getHotels(req.body)
    .then((response) => {
      // console.log("hited", response);
      res.json({ status: true, result: response.result });
    })
    .catch((err) => {
      res.status(400).json({ status: false, Message: err.message });
    });

const MostSearchContro = (req, res) =>
  homeUtil
    .getMostSearched(req.body)
    .then((response) => res.json({ status: true, result: response.result }))
    .catch((err) => {
      res.status(400).json({ status: false, Message: err.message });
    });

const TopReviewsContro = (req, res) =>
  homeUtil
    .getTopReviews(req.body)
    .then((response) => {
      // console.log("hited", response);
      res.json({ status: true, result: response.result });
    })
    .catch((err) => {
      res.status(400).json({ status: false, Message: err.message });
    });

const BestContro = (req, res) =>
  homeUtil
    .getBest(req.body)
    .then((response) => {
      // console.log("hited", response);
      res.json({ status: true, result: response.result });
    })
    .catch((err) => {
      res.status(400).json({ status: false, Message: err.message });
    });

const LowestPriceContro = (req, res) =>
  homeUtil
    .getLowestPrice(req.body)
    .then((response) => {
      // console.log("hited", response);
      res.json({ status: true, result: response.result });
    })
    .catch((err) => {
      res.status(400).json({ status: false, Message: err.message });
    });

const MostStarsContro = (req, res) =>
  homeUtil
    .getMostStars(req.body)
    .then((response) => {
      // console.log("hited", response);
      res.json({ status: true, result: response.result });
    })
    .catch((err) => {
      res.status(400).json({ status: false, Message: err.message });
    });

const moreContro = (req, res) =>
  homeUtil
    .getmore(req.body)
    .then((response) => {
      // console.log("hited", response);
      res.json({ status: true, result: response.result });
    })
    .catch((err) => {
      res.status(400).json({ status: false, Message: err.message });
    });

module.exports = {
  HotelContro,
  MostSearchContro,
  TopReviewsContro,
  BestContro,
  LowestPriceContro,
  MostStarsContro,
  moreContro,
};
