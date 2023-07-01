const express = require("express");
const route = require("./Router/routes");

const app = express();
const PORT = 3000;

app.use("/api/v1/", route);
