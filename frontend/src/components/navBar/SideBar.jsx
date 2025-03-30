import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="h-screen w-1/10 flex items-center">
      <div className="h-full w-1/10 bg-gray-200 fixed left-0">
        <div className="mt-10 ml-5 text-2xl font-bold flex flex-col gap-4">
          <Link to="/">
            <div>HOME</div>
          </Link>

          <Link to="/favorites">
            <div>Favourites</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
