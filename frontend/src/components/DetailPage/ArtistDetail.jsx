import { useEffect, useState } from "react";
import TrackItem from "../TrackItem";

function ArtistDetail({ artistInfo }) {
  const [trackList, setTrackList] = useState([]);
  // const [albumList, setAlbumList] = useState([]);

  useEffect(() => {
    const fetchTrackList = async () => {
      if (!artistInfo.id) {
        return;
      }
      // Fetch data through the node server
      try {
        const res = await fetch(
          `http://localhost:5000/api/deezer/artist-detail-tracks/${artistInfo.id}`
        );
        if (!res.ok) {
          console.error("API Request Error:", res.status);
          return;
        }
        const data = await res.json();
        
        console.log(data);
        setTrackList(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTrackList();
  }, []);

  // useEffect(() => {
  //   console.log(trackList);
  // }, [trackList]);

  return (
    <div className="">
      <div className="h-100 mr-20 flex">
        <div className="h-full w-1/3 flex flex-col items-center justify-center gap-5">
          <img
            className="rounded-full"
            src={artistInfo.picture_medium}
            alt={artistInfo.name}
          />
          <div className="text-4xl">{artistInfo.name}</div>
        </div>
        <div className="h-full w-2/3 bg-gray-200 rounded-2xl flex">
          <div className="w-full grid grid-cols-2 gap-2 p-2">
            {trackList.map((item) => (
              <TrackItem key={item.id} trackInfo={item} />
            ))}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default ArtistDetail;
