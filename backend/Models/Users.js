const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name Required"],
  },
  email: {
    type: String,
    required: [true, "Need mail"],
  },
  password: {
    type: String,
    required: [true, "Need Password"],
  },
});
module.exports = userSchema;
