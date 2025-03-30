import HomePage from "./Pages/HomePage";
import DetailPage from "./Pages/DetailPage";
import FavoritesPage from "./Pages/FavoritesPage";
import SearchPage from "./Pages/SearchPage";
import "./globle.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
