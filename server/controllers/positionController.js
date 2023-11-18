const asyncHandler = require("express-async-handler");

exports.check_position = asyncHandler(async (req, res, next) => {
  res.json("Position Received");
});
