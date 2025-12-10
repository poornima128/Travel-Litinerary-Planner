const express = require("express");
const router = express.Router();
let bookings = require("../data/bookings.json");

router.post("/", (req, res) => {
  bookings.push(req.body);
  res.json({ message: "Booking successful", bookings });
});

module.exports = router;
