const express = require("express");
const router = express.Router();
let messages = require("../data/contact.json");

router.post("/", (req, res) => {
  messages.push(req.body);
  res.json({ message: "Message received", messages });
});

module.exports = router;
