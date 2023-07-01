const mongoose = require("mongoose");

// Schema for Food
const foodSchema = new mongoose.Schema({
  budget: Number,
  price: Number,
});

// Schema for Outing
const outingSchema = new mongoose.Schema({
  budget: Number,
  price: Number,
});

// Schema for Travelling
const travellingSchema = new mongoose.Schema({
  budget: Number,
  price: Number,
});

// Schema for UserInfo
const userInfoSchema = new mongoose.Schema({
  name: String,
  food: foodSchema,
  outing: outingSchema,
  travelling: travellingSchema,
});

module.exports = mongoose.model("UserInfo", userInfoSchema);
