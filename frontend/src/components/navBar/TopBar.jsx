import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function TopBar({ setIsLoginOpen }) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate("/search", { state: { query: searchQuery } });
    }
  };

  return (
    <div className="h-full w-full bg-black/75 flex items-center">
      <div className="mx-10 h-10 w-full flex items-center">
        <Link to="/">
          <img className="h-15" src="/src/imgs/logo-white.png" alt="" />
        </Link>
        <form
          className="m-auto h-10 w-3/5 flex justify-center gap-3"
          onSubmit={handleSearch}
        >
          <input
            type="text"
            className="w-1/4 h-full px-5 bg-white rounded-3xl"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Music..."
          />
          <button
            type="submit"
            className="p-2 font-bold text-center bg-white rounded-2xl cursor-pointer hover:scale-110 transition"
          >
            Search
          </button>
        </form>
        <div
          className="ml-auto text-white cursor-pointer"
          onClick={() => setIsLoginOpen((prev) => !prev)}
        >
          Login
        </div>
      </div>
    </div>
  );
}

export default TopBar;
