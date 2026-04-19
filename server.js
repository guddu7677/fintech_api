require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/auth");

const app = express();

// connect DB
connectDB();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);

// server
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
});