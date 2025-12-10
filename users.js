const express = require("express");
const router = express.Router();
let users = require("../data/users.json");

router.post("/register", (req, res) => {
  users.push(req.body);
  res.json({ message: "Registration successful", users });
});

router.post("/login", (req, res) => {
  let user = users.find(
    u => u.email === req.body.email && u.password === req.body.password
  );

  if (!user) return res.json({ message: "Invalid credentials" });

  res.json({ message: "Login successful", user });
});

module.exports = router;
