import { useState } from "react";
import TopBar from "../components/navBar/TopBar";
import SideBar from "../components/navBar/SideBar";
import LoginModal from "../components/LoginModal";
import { useLocation } from "react-router-dom";
import ArtistDetail from "../components/DetailPage/ArtistDetail";
import AlbumDetail from "../components/DetailPage/AlbumDetail";
import TrackDetail from "../components/DetailPage/TrackDetail";

function DetailPage() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const location = useLocation();
  const data = location.state;


  return (
    <div>
      <div className="">
        <header className="h-20 top-0 sticky ">
          <TopBar setIsLoginOpen={setIsLoginOpen} />
        </header>
        <main className="flex">
          <SideBar />
          <div className="mx-auto p-5 w-9/10 ">
            {data ? (
              <div>
                {data.artistInfo && (
                  <ArtistDetail size="m" artistInfo={data.artistInfo} />
                )}
                {data.albumInfo && <AlbumDetail albumInfo={data.albumInfo} />}
                {data.trackInfo && <TrackDetail trackInfo={data.trackInfo} />}
                {!data && <div>No data available</div>}
              </div>
            ) : (
              <p>No data available. Please go back.</p>
            )}
          </div>
          {isLoginOpen && <LoginModal setIsLoginOpen={setIsLoginOpen} />}
        </main>
      </div>
    </div>
  );
}

export default DetailPage;
