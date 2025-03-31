import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import deezerRoutes from "./routes/deezerRoutes.js";
import lastfmRoutes from "./routes/lastfmRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
// const LASTFM_API_KEY = "422efd84f96c84fa583a041c6d516e77";

app.use("/api/deezer", deezerRoutes);
app.use("/api/lastfm", lastfmRoutes);

app.get("/api/hello", (req, res) => {
  res.json({ message: "hello from backend" });
});

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected Mongodb Atlas");
  } catch (err) {
    console.error("Mongodb Atlas connection err:", err);
    process.exit(1);
  }
};
connectDB();

app.listen(5000, () => {
  console.log("Server started at http://localhost:5000");
});
