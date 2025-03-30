import { useEffect } from "react";
import { useState } from "react";
import TrackItem from "../TrackItem";

function AlbumDetail({ albumInfo }) {
  const [trackList, setTrackList] = useState([]);

  useEffect(() => {
    const fetchTrackList = async () => {
      if (!albumInfo.id) {
        return;
      }

      try {
        const res = await fetch(
          `http://localhost:5000/api/deezer/album-detail-tracks/${albumInfo.id}`
        );
        if (!res.ok) {
          console.error("API Request Error:", res.status);
          return;
        }
        const data = await res.json();
        // console.log(data);
        setTrackList(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTrackList();
  }, []);

  return (
    <div className="">
      <div className="h-100 mr-20 flex">
        <div className="h-full w-1/3 flex flex-col items-center justify-center gap-5">
          <img
            className="rounded-full"
            src={albumInfo.cover_medium}
            alt={albumInfo.title}
          />
          <div className="text-4xl font-bold">{albumInfo.title}</div>
          <div className="text-2xl">{albumInfo.artist.name}</div>
        </div>
        <div className="h-full w-2/3 bg-gray-200 rounded-2xl overflow-y-auto">
          <div className="w-full grid grid-cols-2 gap-2 p-2">
            {trackList.map((item) => (
              <TrackItem key={item.id} size="m" trackInfo={item} />
            ))}
          </div>
        </div>
        
      </div>
      <div></div>
    </div>
  );
}

export default AlbumDetail;
