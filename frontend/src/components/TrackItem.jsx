import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTrack, removeTrack } from "../store/slices/favoritesSlice";

function TrackItem({ size = "m", trackInfo }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.tracks);
  const isFavorite = favorites.some((track) => track.id === trackInfo.id);

  const handleToggleFavorite = () => {
    if (!trackInfo || !trackInfo.id) {
      console.error("Invalid track info:", trackInfo);
      return;
    }
    if (isFavorite) {
      dispatch(removeTrack(trackInfo.id));
    } else {
      dispatch(addTrack(trackInfo));
    }
  };

  const ItemSize = {
    s: "h-9 w-full",
    m: "h-17 w-full",
    l: "h-25 w-full",
  };
  const imgSize = {
    s: "h-9 w-9",
    m: "h-17 w-17",
    l: "h-25 w-25",
  };

  return (
    <div className="bg-white rounded-xl hover:bg-gray-100 outline-gray-500">
      <div className={`${ItemSize[size]} w-full flex`}>
        <Link to="/detail" state={{ trackInfo }}>
          <div className="h-full w-4/5 flex items-center cursor-pointer">
            <img
              className={`${imgSize[size]} rounded-xl`}
              src={trackInfo.album.cover}
              alt="name"
            />
            <div className="p-3">
              <p className="truncate w-60 font-bold">{trackInfo.title}</p>
              {size !== "s" && <p>{trackInfo.artist.name}</p>}
            </div>
          </div>
        </Link>
        <div className="w-1/5 text-2xl flex items-center justify-center gap-5">
          <button className="cursor-pointer" onClick={handleToggleFavorite}>
            {isFavorite ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
          </button>
          <button className="cursor-pointer">
            <FiMoreHorizontal />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TrackItem;
