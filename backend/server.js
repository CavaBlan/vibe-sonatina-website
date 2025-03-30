import express from "express";
import cors from "cors";
import deezerRoutes from "./routes/deezerRoutes.js";
import lastfmRoutes from "./routes/lastfmRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
// const LASTFM_API_KEY = "422efd84f96c84fa583a041c6d516e77";

app.use("/api/deezer", deezerRoutes);
app.use("/api/lastfm", lastfmRoutes);

app.get("/api/hello", (req, res) => {
  res.json({ message: "hello from backend" });
});

// // Search Music Information Request
// app.get("/search", async (req, res)=>{
//   const { query } = req.query;

//   if (!query) {
//     return res.status(400).json({ error: "Search query is required" });
//   }

//   try {
//     const response = await fetch(`https://api.deezer.com/search?q=${encodeURIComponent(query)}`);
//     const date = await response.json();
//     res.json(data.data);
//   } catch (error) {
//     console.error("Error searching Deezer:", error);
//     res.status(500).json({ error: "Failed to fetch search results" });
//   }

// });

// // Fetch the newly released tracks
// app.get("/api/deezer/latest-tracks", async (req, res) => {
//   try {
//     const response = await fetch(
//       "https://api.deezer.com/search/track?q=*&order=release_date"
//     );
//     const data = await response.json();
//     console.log("Deezer API Response:", data);
//     res.json(data.data.slice(0, 10));
//   } catch (error) {
//     console.error("Error fetching data code:", error);
//     res.status(500).json({ error: "Failed to fetch Deezer data" });
//   }
// });

// // Fetch the newly released albums
// app.get("/api/deezer/latest-albums", async (req, res) => {
//   try {
//     const response = await fetch(
//       "https://api.deezer.com/search/album?q=*&order=release_date"
//     );
//     const data = await response.json();
//     // console.log("Deezer API Response:", data);
//     res.json(data.data);
//   } catch (error) {
//     console.error("Error fetching data code:", error);
//     res.status(500).json({ error: "Failed to fetch Deezer data" });
//   }
// });

// // Fetch the most popular music
// app.get("/api/deezer/popular-music", async (req, res) => {
//   try {
//     const response = await fetch("https://api.deezer.com/chart");
//     const data = await response.json();
//     // console.log("Deezer API Response:", data);
//     res.json(data);
//   } catch (error) {
//     console.error("Error fetching data code:", error);
//     res.status(500).json({ error: "Failed to fetch Deezer data" });
//   }
// });

// // Fetch tracks for the artist detail page
// app.get("/api/deezer/artist-detail-tracks/:artistId", async (req, res) => {
//   const { artistId } = req.params;
//   try {
//     const response = await fetch(
//       `https://api.deezer.com/artist/${artistId}/top?limit=10`
//     );
//     const data = await response.json();
//     res.json(data.data); // return just the array of tracks
//   } catch (error) {
//     console.error("Error fetching artist tracks:", error);
//     res.status(500).json({ error: "Failed to fetch artist tracks" });
//   }
// });

// // Fetch tracks for the album detail page
// app.get("/api/deezer/album-detail-tracks/:artistId", async (req, res) => {
//   const { artistId } = req.params;
//   try {
//     const response = await fetch(`https://api.deezer.com/album/${artistId}`);
//     const data = await response.json();
//     res.json(data.tracks.data);
//   } catch (error) {
//     console.error("Error fetching artist tracks:", error);
//     res.status(500).json({ error: "Failed to fetch artist tracks" });
//   }
// });

// // Fetch track info from Last.fm
// app.get("/api/lastfm/track-info", async (req, res) => {
//   const { artist, track } = req.query;
//   if (!artist || !track) {
//     return res.status(400).json({ error: "Artist and track name are required" });
//   }

//   try {
//     const url = `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${LASTFM_API_KEY}&artist=${encodeURIComponent(artist)}&track=${encodeURIComponent(track)}&format=json`;
//     const response = await fetch(url);
//     const data = await response.json();

//     if (data.track && data.track.wiki) {
//       res.json({ summary: data.track.wiki.summary });
//     } else {
//       res.json({ summary: "No description available." });
//     }
//   } catch (error) {
//     console.error("Error fetching track info:", error);
//     res.status(500).json({ error: "Failed to fetch track info" });
//   }
// });

app.listen(5000, () => {
  console.log("Server started at http://localhost:5000");
});
