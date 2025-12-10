const express = require("express");
const router = express.Router();
let itineraries = require("../data/itineraries.json");

router.post("/create", (req, res) => {
  itineraries.push(req.body);
  res.json({ message: "Itinerary created", itineraries });
});

router.get("/:userId", (req, res) => {
  let data = itineraries.filter(i => i.userId == req.params.userId);
  res.json(data);
});

module.exports = router;
