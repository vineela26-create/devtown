require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

// ✅ Add this root route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// Your API routes go here (e.g., /login, /register)

// Connect to MongoDB
mongoose.connect(process.env.MONGOURL)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
