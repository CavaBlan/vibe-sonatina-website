import { Link, useLocation } from "react-router-dom";

function SideBar() {
  const currentPage = useLocation().pathname;

  return (
    <div className="h-screen w-1/10 flex items-center">
      <div className="h-full w-1/10 bg-gray-200 fixed left-0">
        <div className="mt-10  text-2xl font-bold flex flex-col gap-1">
          <div className={`${currentPage === "/" && "bg-white"} pl-5 p-2`} onClick={()=>setCurrentPage("home")}>
            <Link to="/">
              <div>HOME</div>
            </Link>
          </div>
          <div className={`${currentPage === "/favorites" && "bg-white"} pl-5 p-2`} onClick={()=>setCurrentPage("favorites")}>
            <Link to="/favorites">
              <div>Favourites</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
