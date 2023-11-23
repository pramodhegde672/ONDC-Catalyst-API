const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
// data base connection
const db = require("./config/connection");
const homeRouter = require("./router/home");

const { errorHandler, notFound } = require("./middleware/errorMiddleware");
// .env config
dotenv.config();
const corsOptions = {
  origin: process.env.FROUND_END_PORT,
  credentials: true, // access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// routs
app.use("/api", homeRouter);

app.use(errorHandler);
app.use(notFound);

// data connection call
db.connect((err) => {
  if (err) console.log(`Connection error${err}`);
  else console.log("Datebase Connected to port 27017");
});
//
app.listen(process.env.PORT, () => {
  console.log(`sever started running on localhost:${process.env.PORT}`);
});
