import { useEffect, useState } from "react";
import AlbumCard from "../AlbumCard";
import TrackItem from "../TrackItem";

function PopularMusic({ type, musicItems, children }) {
  return (
    <div className="">
      <div className="text-3xl font-bold">{children}</div>
      {type === "album" && (
        <div className="flex justify-center gap-2">
          {musicItems.map((item) => (
            <AlbumCard key={item.id} albumInfo={item} />
          ))}
        </div>
      )}
      {type === "track" && (
        <div className="grid grid-cols-3 gap-4 p-4">
          {musicItems.map((item) => (
            <TrackItem key={item.id} size="l" trackInfo={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default PopularMusic;
