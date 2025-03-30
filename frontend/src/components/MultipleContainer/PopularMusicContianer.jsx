import PopularArtists from "./PopularArtists";
import PopularMusic from "./PopularMusic";
import { useEffect, useState } from "react";

function PopularMusicContianer() {
  const [popularTracks, setPopularTracks] = useState([]);
  const [popularAlbums, setPopularAlbums] = useState([]);
  const [popularArtists, setPopularArtists] = useState([]);
  const [numCards, setNumCards] = useState(6);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("popularTracks", popularTracks);
    console.log("popularAlbums", popularAlbums);
    console.log("popularArtists", popularArtists);
  }, [popularTracks, popularAlbums]);

  useEffect(() => {
    const fetchTopTracks = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          "http://localhost:5000/api/deezer/popular-music"
        );

        if (!res.ok) {
          console.error("API Request Error:", res.status);
          return;
        }

        const data = await res.json();
        setPopularTracks(data.tracks.data.slice(0, numCards + numCards / 2));
        setPopularAlbums(data.albums.data.slice(0, numCards));
        setPopularArtists(data.artists.data.slice(0, numCards + 1));
        console.log("Popular Music:", data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTopTracks();
  }, []);

  if (isLoading) {
    return (
      <div className="h-70 w-full flex justify-center items-center text-3xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="w-full">
      <PopularMusic type="track" musicItems={popularTracks}>
        Popular Tracks
      </PopularMusic>
      <PopularMusic type="album" musicItems={popularAlbums}>
        Popular Albums
      </PopularMusic>
      <PopularArtists musicItems={popularArtists}>
        Popular Artists
      </PopularArtists>
    </div>
  );
}

export default PopularMusicContianer;
