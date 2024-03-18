import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages

import HomePage from "./pages/HomePage/HomePage";
import HomeCountriesPage from "./pages/HomeCountries/HomeCountriesPage";
import SortedCountries from "./pages/SortedCountries/SortedCountries";
// Components
import Header from "./components/Header/Header";
import SearchComponent from "./components/SearchComponent/SearchComponent";
// Style
import "./App.css";

const countriesUrl = "http://localhost:3000";

function App() {
  // Regions & subregions array, for search component
  const [continents, setContinents] = useState([]);
  return (
    <Router>
      <Header />
      <SearchComponent />
      <Routes>
        {/* Home --> Home countries page */}
        <Route path="/" element={<HomePage />} />
        <Route
          path="/countries"
          element={
            <HomeCountriesPage
              url={countriesUrl}
              setContinents={setContinents}
            />
          }
        />
        <Route
          path="/countries/sort"
          element={<SortedCountries url={countriesUrl} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
