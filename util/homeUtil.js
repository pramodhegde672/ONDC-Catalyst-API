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

  getTopReviews: (details) =>
    new Promise(async (resolve, reject) => {
      const topReviews = await db
        .get()
        .collection(collection.TOPREVIEWS_COLLECTION)
        .find()
        .toArray();
      if (topReviews.length !== 0) {
        resolve({ result: topReviews });
      } else {
        reject({ message: "Not found." });
      }
    }),

  getBest: (details) =>
    new Promise(async (resolve, reject) => {
      const Best = await db
        .get()
        .collection(collection.BEST_COLLECTION)
        .find()
        .toArray();
      if (Best.length !== 0) {
        resolve({ result: Best });
      } else {
        reject({ message: "Not found." });
      }
    }),

  getLowestPrice: (details) =>
    new Promise(async (resolve, reject) => {
      const LowestPrice = await db
        .get()
        .collection(collection.LOWESTPRICE_COLLECTION)
        .find()
        .toArray();
      if (LowestPrice.length !== 0) {
        resolve({ result: LowestPrice });
      } else {
        reject({ message: "Not found." });
      }
    }),

  getMostStars: (details) =>
    new Promise(async (resolve, reject) => {
      const MostStars = await db
        .get()
        .collection(collection.MOSTSTARS_COLLECTION)
        .find()
        .toArray();
      if (MostStars.length !== 0) {
        resolve({ result: MostStars });
      } else {
        reject({ message: "Not found." });
      }
    }),

  getmore: (details) =>
    new Promise(async (resolve, reject) => {
      const more = await db
        .get()
        .collection(collection.MORE_COLLECTION)
        .find()
        .toArray();
      if (more.length !== 0) {
        resolve({ result: more });
      } else {
        reject({ message: "Not found." });
      }
    }),
};
