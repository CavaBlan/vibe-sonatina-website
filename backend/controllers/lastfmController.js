const LASTFM_API_KEY = "422efd84f96c84fa583a041c6d516e77";

// Fetch track info from Last.fm
export const getTrackInfo = async (req, res) => {
  const { artist, track } = req.query;
  if (!artist || !track) {
    return res
      .status(400)
      .json({ error: "Artist and track name are required" });
  }

  try {
    const url = `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${LASTFM_API_KEY}&artist=${encodeURIComponent(
      artist
    )}&track=${encodeURIComponent(track)}&format=json`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.track && data.track.wiki) {
      res.json({ summary: data.track.wiki.summary });
    } else {
      res.json({ summary: "No description available." });
    }
  } catch (error) {
    console.error("Error fetching track info:", error);
    res.status(500).json({ error: "Failed to fetch track info" });
  }
};
