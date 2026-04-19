require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/auth");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 6000;

// safer startup
const startServer = async () => {
  try {
    await connectDB(); // WAIT for DB

    app.use("/api/auth", authRoutes);

    app.get("/", (req, res) => {
      res.send("API is running 🚀");
    });

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

  } catch (err) {
    console.error("Server failed to start:", err);
  }
};

startServer();