const express = require("express");
const router = express.Router();
const places = require("../data/places.json");

router.get("/", (req, res) => {
  res.json(places);
});

module.exports = router;
