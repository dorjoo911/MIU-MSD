const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  about: String,
  favColor: String,
  gender: String,
  email: String,
  dob: String,
  luckNumber: Number,
  courseSatisfaction: Number,
  phone: String,
  education: String,
  hobbies: Array,
});

module.exports = mongoose.model("users", userSchema);
