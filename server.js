require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/auth");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// connect DB (IMPORTANT: before routes is better)
connectDB();

// routes
app.use("/api/auth", authRoutes);

// PORT (IMPORTANT FIX)
const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});