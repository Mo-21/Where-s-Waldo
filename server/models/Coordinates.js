const mongoose = require("mongoose");

const Coordinates = mongoose.Schema;

const userSchema = new Coordinates({
  x: {
    type: "Number",
    required: true,
  },
  y: {
    type: "Number",
    required: true,
  },
});

module.exports = mongoose.model("Coordinates", userSchema);
