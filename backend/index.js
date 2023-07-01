const express = require("express");
const router = require("./Router/routes");
const User = require("./db/User");
const app = express();
const PORT = 3000;

app.use("/api/v1/", router); //basic routes
