const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

const Coordinates = require("../models/Coordinates");

exports.check_position = [
  body("x").isNumeric(),
  body("y").isNumeric(),
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(500).json(errors.array());
    } else {
      try {
        const x = await Coordinates.find(req.body.x).exec();
        const y = await Coordinates.find(req.body.y).exec();

        if (x && y) {
          res.status(200).json("Incorrect!");
        } else {
          res.status(200).json("Correct! You Won");
        }
      } catch (error) {
        res.status(500).json(error);
      }
    }
  }),
];
