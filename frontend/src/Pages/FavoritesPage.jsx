import { useSelector } from "react-redux";
import { useState } from "react";
import TopBar from "../components/navBar/TopBar";
import SideBar from "../components/navBar/SideBar";
import LoginModal from "../components/LoginModal";
import TrackItem from "../components/TrackItem";

function FavoritesPage() {
  const favorites = useSelector((state) => state.favorites.tracks);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <div className="">
        <header className="h-20 top-0 sticky bg-white z-10">
          <TopBar setIsLoginOpen={setIsLoginOpen} />
        </header>
        <main className="flex">
          <SideBar />
          <div className="mx-auto p-5 w-9/10">
            <h1 className="text-2xl font-bold mb-4">My Favorite Tracks</h1>
            {!favorites ? (
              <p className="text-gray-500">Loading...</p>
            ) : favorites.length === 0 ? (
              <p className="text-gray-500">No favorites yet</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {favorites.map((track) => (
                  // <div key={track.id} className="p-4 border rounded-lg">
                  //   <h3 className="font-semibold">{track.title}</h3>
                  //   <p className="text-gray-600">{track.artist.name}</p>
                  // </div>
                  <TrackItem size = "m" trackInfo={track}/>
                ))}
              </div>
            )}
          </div>
          {isLoginOpen && <LoginModal setIsLoginOpen={setIsLoginOpen} />}
        </main>
      </div>
    </div>
  );
}

export default FavoritesPage;
