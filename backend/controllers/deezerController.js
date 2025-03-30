// Search Music Information Request
export const searchMusic = async (req, res) => {
  const { q } = req.query;
  if (!q) return res.status(400).json({ error: "Search query is required" });

  // const { query } = req.query;
  // if (!query) {
  //   return res.status(400).json({ error: "Search query is required" });
  // }

  try {
    const response = await fetch(
      // `https://api.deezer.com/search/track?q=${encodeURIComponent(query)}`
      `https://api.deezer.com/search/track?q=${encodeURIComponent(q)}`
    );
    const data = await response.json();

    if (data.error) {
      return res.status(400).json({ error: data.error });
    }

    res.json(data.data || []);
  } catch (error) {
    console.error("Error searching Deezer:", error);
    res.status(500).json({ error: "Failed to fetch search results" });
  }
};

// Fetch the newly released tracks
export const getLatestTracks = async (req, res) => {
  try {
    const response = await fetch(
      "https://api.deezer.com/search/track?q=*&order=release_date"
    );
    const data = await response.json();
    res.json(data.data.slice(0, 10) || []);
  } catch (error) {
    console.error("Error fetching latest tracks:", error);
    res.status(500).json({ error: "Failed to fetch latest tracks" });
  }
};

// Fetch the newly released albums
export const getLatestAlbums = async (req, res) => {
  try {
    const response = await fetch(
      "https://api.deezer.com/search/album?q=*&order=release_date"
    );
    const data = await response.json();
    res.json(data.data || []);
  } catch (error) {
    console.error("Error fetching latest albums:", error);
    res.status(500).json({ error: "Failed to fetch latest albums" });
  }
};

// Fetch the most popular music
export const getPopularMusic = async (req, res) => {
  try {
    const response = await fetch("https://api.deezer.com/chart");
    const data = await response.json();
    res.json(data || {});
  } catch (error) {
    console.error("Error fetching popular music:", error);
    res.status(500).json({ error: "Failed to fetch popular music" });
  }
};

// Fetch tracks for the artist detail page
export const getArtistTracks = async (req, res) => {
  const { artistId } = req.params;
  try {
    const response = await fetch(
      `https://api.deezer.com/artist/${artistId}/top?limit=10`
    );
    const data = await response.json();
    res.json(data.data || []);
  } catch (error) {
    console.error("Error fetching artist tracks:", error);
    res.status(500).json({ error: "Failed to fetch artist tracks" });
  }
};

// Fetch tracks for the album detail page
export const getAlbumTracks = async (req, res) => {
  const { artistId } = req.params;
  try {
    const response = await fetch(`https://api.deezer.com/album/${artistId}`);
    const data = await response.json();
    res.json(data.tracks?.data || []);
  } catch (error) {
    console.error("Error fetching album tracks:", error);
    res.status(500).json({ error: "Failed to fetch album tracks" });
  }
};
