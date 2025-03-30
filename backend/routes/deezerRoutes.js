import express from "express";
import {
  searchMusic,
  getLatestTracks,
  getLatestAlbums,
  getPopularMusic,
  getArtistTracks,
  getAlbumTracks,
} from "../controllers/deezerController.js";

const router = express.Router();

// Search for music
router.get("/search", searchMusic);

// Get the latest tracks
router.get("/latest-tracks", getLatestTracks);

// Get the latest albums
router.get("/latest-albums", getLatestAlbums);

// Get the most popular music
router.get("/popular-music", getPopularMusic);

// Get tracks for an artist's detail page
router.get("/artist-detail-tracks/:artistId", getArtistTracks);

// Get tracks for an album's detail page
router.get("/album-detail-tracks/:artistId", getAlbumTracks);

export default router;
