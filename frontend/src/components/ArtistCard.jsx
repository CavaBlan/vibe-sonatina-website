import { Link } from "react-router-dom";

function ArtistCard({ artistInfo }) {
  return (
    <div>
      <div className="w-40 m-5">
        <Link
          to="/detail"
          state={{ artistInfo }}
          // onClick={() => {
          //   localStorage.setItem("artistInfo", JSON.stringify(musicInfo));
          // }}
        >
          <img
            src={artistInfo.picture}
            alt={artistInfo.name}
            className="w-full h-40 object-cover rounded-full hover:scale-105 transition cursor-pointer"
          />
        </Link>
        <div className="mt-2 text-center">{artistInfo.name}</div>
      </div>
    </div>
  );
}

export default ArtistCard;
