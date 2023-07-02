const mongoose = require("mongoose");

//schma for bill
const billSchema = mongoose.Schema(
  {
    user_id: {
      type: String,
      required: [true, "Please specify user"],
    },
    amount: {
      type: Number,
      required: [true, "Please add amount"],
    },
    tag: {
      type: String,
      required: [true, "Please add tag"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Bill", billSchema);
