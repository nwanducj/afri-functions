const express = require("express");
const eventController = require("../controllers/eventController");

router = express.Router();

router.get(
    "/",
    eventController.getEvents
)
router.get(
    "/:id",
    eventController.getEventById
)


module.exports = router;