const homeUtil = require("../util/homeUtil");

const HotelContro = (req, res) => 
homeUtil
  .getHotels(req.body)
  .then((response) => {
    console.log("hited", response);
    res.json({ status: true, result: response.result });
  }
  )
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
module.exports = {
  HotelContro,
  MostSearchContro,
};
