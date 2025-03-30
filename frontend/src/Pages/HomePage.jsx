import { useState } from "react";
import NewReleasesMusic from "../components/MultipleContainer/NewReleasesMusic";
import TopBar from "../components/navBar/TopBar";
import SideBar from "../components/navBar/SideBar";
import LoginModal from "../components/LoginModal";
import PopularMusicContianer from "../components/MultipleContainer/PopularMusicContianer";

function HomePage() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div>
      <div className="">
        <header className="h-20 top-0 sticky ">
          <TopBar setIsLoginOpen={setIsLoginOpen} />
        </header>
        <main className="flex">
          <SideBar />
          <div className="mx-auto p-5 w-9/10 ">
            <PopularMusicContianer />
            <NewReleasesMusic />
          </div>
          {isLoginOpen && <LoginModal setIsLoginOpen={setIsLoginOpen} />}
        </main>
      </div>
    </div>
  );
}

export default HomePage;
