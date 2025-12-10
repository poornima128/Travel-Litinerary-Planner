const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/places", require("./routes/places"));
app.use("/api/itinerary", require("./routes/itinerary"));
app.use("/api/booking", require("./routes/booking"));
app.use("/api/reviews", require("./routes/reviews"));
app.use("/api/contact", require("./routes/contact"));

app.listen(5000, () => console.log("Backend running on port 5000"));
