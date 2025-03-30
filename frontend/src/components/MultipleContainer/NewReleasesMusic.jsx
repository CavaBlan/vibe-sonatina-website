import { useEffect, useState } from "react";
import AlbumCard from "../AlbumCard";

function NewReleasesMusic() {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("new", tracks);
  }, [tracks]);

  useEffect(() => {
    const fetchTopTracks = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "http://localhost:5000/api/deezer/latest-albums"
        );

        if (!res.ok) {
          console.error("API Request Error:", res.status);
          return;
        }

        const data = await res.json();
        setTracks(data);
        console.log("New Releases albums:", data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTopTracks();
  }, []);

  return (
    <div className="w-full border-4 rounded-2xl ">
      <div className="mt-5 mx-5 text-4xl font-bold">New Releases</div>
      <div className="w-full grid grid-cols-5 gap-3 justify-items-center">
        {loading ? (
          <p>Loading...</p>
        ) : (
          tracks.map((item) => <AlbumCard key={item.id} albumInfo={item} />)
        )}
      </div>
    </div>
  );
}

export default NewReleasesMusic;
