const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number },
  gender: { type: String },
  country: { type: String },
  rating: { type: Number },
  suggestions: { type: String },
  originURL: { type: String },
});

module.exports = mongoose.model("Survey", schema);
