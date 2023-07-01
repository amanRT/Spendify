const mongoose = require("mongoose");
const mongoose = require("userSchema");
mongoose.connect("mongodb://localhost:27017/spendifyData", {
  useNewUrlParser: true,
});
mongoose.set("useCreateIndex", true);

const User = new mongoose.model("User", userSchema);
module.exports = User;
