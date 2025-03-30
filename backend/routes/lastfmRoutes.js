import express from "express";
import { getTrackInfo } from "../controllers/lastfmController.js";

const router = express.Router();

// Get track information from Last.fm
router.get("/track-info", getTrackInfo);

export default router;
