import { Link } from "react-router-dom";

function AlbumCard({ albumInfo }) {
  const imageUrl =
  albumInfo.cover_medium ||
  albumInfo.album?.cover_medium ||
    "https://via.placeholder.com/500x500?text=No+Image";
  const title = albumInfo.title_short || albumInfo.title;

  return (
    <div>
      <div className="w-50 m-5 bg-gray-300 border-gray-500 rounded-xl transition-transform duration-500 hover:scale-110 hover:translate-x-1 hover:-translate-y-1">
        <Link to="/detail" state={{ albumInfo }}>
          <div
            className="w-50 h-50 rounded-xl shadow-2xl  hover:shadow-[0px_10px_50px_rgba(0,0,0,0.6)] transition duration-500 cursor-pointer hover:-translate-x-1 hover:translate-y-1 flex flex-col justify-end bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            <div className="bg-white/80 h-15 rounded-b-xl flex flex-col py-2 px-3 ">
              <div className="font-bold overflow-hidden">{title}</div>
              <div>{albumInfo.artist.name}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default AlbumCard;
