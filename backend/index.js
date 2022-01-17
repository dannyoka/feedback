const express = require("express");
const app = express();
const routes = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

PORT = process.env.PORT;
MONGODB_URI = process.env.MONGODB_URI;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", routes());

const startServer = async () => {
  await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
  });
  console.log("Now connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
  });
};

startServer();
