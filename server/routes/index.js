const express = require("express");
const router = express.Router();

const positionController = require("../controllers/positionController");

router.post("/position", positionController.check_position);

module.exports = router;
