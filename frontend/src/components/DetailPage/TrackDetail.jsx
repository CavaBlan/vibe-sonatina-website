import { useEffect, useState } from "react";

function TrackDetail({ trackInfo }) {
  const [description, setDescription] = useState("Loading...");

  useEffect(() => {
    if (!trackInfo.artist || !trackInfo.title) return;

    const fetchTrackDescription = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/lastfm/track-info?artist=${encodeURIComponent(
            trackInfo.artist.name
          )}&track=${encodeURIComponent(trackInfo.title)}`
        );
        const data = await response.json();
        setDescription(data.summary || "No description available.");
      } catch (error) {
        console.error("Error fetching track description:", error);
        setDescription("Failed to load description.");
      }
    };

    fetchTrackDescription();
  }, [trackInfo]);

  useEffect(() => {
    console.log("description", description);
  }, [description]);

  function cleanDescription(description) {
    return description.replace(/\s*<a\b[^>]*>.*<\/a>\.?/gi, "").trim();
  }

  return (
    <div>
      <div className="h-100 mr-20 flex">
        <div className="h-full w-1/3 flex flex-col items-center justify-center gap-5">
          <img
            className=""
            src={trackInfo.album.cover_medium}
            alt={trackInfo.title}
          />
          <div className="text-4xl">{trackInfo.title}</div>
          <div className="text-2xl">{trackInfo.artist.name}</div>
        </div>
        <div className="h-full w-2/3 mt-7 text-xl rounded-2xl flex flex-col gap-10">
          <div className="w-4/5">{cleanDescription(description)}</div>
          <div>
            <audio className="w-2/3" controls>
              <source src={trackInfo.preview} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default TrackDetail;
