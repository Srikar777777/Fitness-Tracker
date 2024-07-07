import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./routes/User.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true })); // for form data

app.use("/api/user/", UserRoutes);
// error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Welcome to FitnessTracker",
  });
});
const connectDB = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect("mongodb://localhost:27017/FitnessTracker")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => {
      console.error("Failed to connect with MongoDB");
      console.error(err);
    });
};


const startServer = async () => {
  try {
    connectDB();
    app.listen(4000, () => console.log("Server started on port 4000"));
  } catch (error) {
    console.log(error);
  }
};

startServer();