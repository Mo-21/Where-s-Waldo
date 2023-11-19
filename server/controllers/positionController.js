const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

const Coordinates = require("../models/Coordinates");
const { request } = require("express");

exports.check_position = [
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const result = await Coordinates.findOne({
      name: req.body.name,
      minX: { $lte: req.body.x },
      maxX: { $gte: req.body.x },
      minY: { $lte: req.body.y },
      maxY: { $gte: req.body.y },
    });

    if (!errors.isEmpty()) {
      res.status(500).json(errors.array());
    } else {
      try {
        if (!result) {
          res.status(200).json(false);
        } else {
          res.status(200).json(true);
        }
      } catch (error) {
        res.status(500).json(error);
      }
    }
  }),
];
