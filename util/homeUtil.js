const collection = require("../config/collection");
const db = require("../config/connection");
const bcrypt = require("bcrypt");
module.exports = {
  getHotels: (details) =>
    new Promise(async (resolve, reject) => {
     
      const hotel = await db
        .get()
        .collection(collection.HOTEL_COLLECTION)
        .find()
        .toArray();
      if (hotel.length !== 0) {
        resolve({ result: hotel });
      } else {
        reject({ message: "Not found." });
      }
    }),

  getMostSearched: (details) =>
    new Promise(async (resolve, reject) => {
      const mostSearched = await db
        .get()
        .collection(collection.MOSTSEARCHED_COLLECTION)
        .find()
        .toArray();
      if (mostSearched.length !== 0) {
        resolve({ result: mostSearched });
      } else {
        reject({ message: "Not found." });
      }
    }),
};
