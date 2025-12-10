const express = require("express");
const router = express.Router();
let reviews = require("../data/reviews.json");

router.post("/", (req, res) => {
  reviews.push(req.body);
  res.json({ message: "Review added", reviews });
});

router.get("/:placeId", (req, res) => {
  res.json(reviews.filter(r => r.placeId == req.params.placeId));
});

module.exports = router;
