const express = require("express");
const router = require("./Router/routes");
const mongoose = require("mongoose");
const userSchema = require("./Models/Users");
const app = express();
const PORT = 3000;

const User = mongoose.model("User", userSchema);
app.use("/api/v1/", router); //basic routes

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

const MONGO_URI = "mongodb://127.0.0.1:27017/Spendify";

const start = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log("Server is listening", PORT));
  } catch (err) {
    console.log(err);
  }
};

// // Save the new user to the database
// newUser.save().then((res) => console.log(res));

// console.log("User added successfully!");

start();
