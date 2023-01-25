// dotenv configuration
require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Connected");
});

// Routing
app.use("/api", require("./routes/api"));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

module.exports = app;
