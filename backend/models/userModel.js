const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a name field"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Please enter an email"],
    },
    password: {
      type: String,
      required: [true, "Please enter a password field"],
    },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("USER", userSchema);