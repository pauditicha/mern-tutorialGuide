const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "USER",
    },
    text: {
      type: String,
      required: [true, "Please enter a text field"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("GOAL", goalSchema);
