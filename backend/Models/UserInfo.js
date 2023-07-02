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
const userInfoSchema = new mongoose.Schema(
  {
    user_id: String,
    name: String,
    food: foodSchema,
    outing: outingSchema,
    travelling: travellingSchema,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("UserInfo", userInfoSchema);
