import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import TopBar from "../components/navBar/TopBar";
import SideBar from "../components/navBar/SideBar";
import LoginModal from "../components/LoginModal";
import TrackItem from "../components/TrackItem";

function SearchPage() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  // Gets the initial search trim from the URL state
  useEffect(() => {
    if (location.state?.query) {
      setSearchQuery(location.state.query);
    }
  }, [location]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!searchQuery.trim()) {
        setSearchResults([]);
        return;
      }

      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:5000/api/deezer/search?q=${encodeURIComponent(
            searchQuery
          )}`
        );
        if (!response.ok) {
          throw new Error("Search request failed");
        }
        const data = await response.json();
        console.log("Search Result:", data);
        setSearchResults(data || []);
      } catch (error) {
        console.error("API Request Error:", error);
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(fetchSearchResults, 500);
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-white">
      <div className="">
        <header className="h-20 top-0 sticky bg-white z-10">
          <TopBar setIsLoginOpen={setIsLoginOpen} />
        </header>
        <main className="flex">
          <SideBar />
          <div className="mx-auto p-5 w-11/12">
            <h1 className="text-2xl font-bold mb-4">
              {`Search Result: ${searchQuery}`}
            </h1>
            {loading ? (
              <p className="text-gray-500">Loading...</p>
            ) : searchResults.length === 0 ? (
              <p className="text-gray-500">No related results found</p>
            ) : (
              <div className="w-11/12 m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {searchResults.map((track) => (
                  <TrackItem key={track.id} size="m" trackInfo={track} />
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

export default SearchPage;
