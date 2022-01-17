const express = require("express");
const surveys = require("./surveys");

const routes = () => {
  const router = express.Router();
  router.use("/surveys", surveys());
  return router;
};

module.exports = routes;
