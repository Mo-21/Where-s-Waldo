const mongoose = require("mongoose");

const Coordinates = mongoose.Schema;

const userSchema = new Coordinates({
  name: {
    type: "String",
  },
  minX: {
    type: "Number",
  },
  maxX: {
    type: "Number",
  },
  minY: {
    type: "Number",
  },
  maxY: {
    type: "Number",
  },
});

module.exports = mongoose.model("Coordinates", userSchema);
