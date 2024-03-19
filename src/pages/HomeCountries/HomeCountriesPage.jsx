import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const HomeCountriesPage = ({
  url,
  setContinents,
  setLanguages,
  setCurrencies,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${url}/countries`);
        // console.log("continents >", data.continents);
        // console.log("languages >", data.languages);
        // console.log("currencies >", data.currencies);
        setContinents(data.continents);
        setLanguages(data.languages);
        setCurrencies(data.currencies);
      } catch (error) {
        console.log("home countries page, error >>> ", error);
      }
      setIsLoading(false);
    };
    fetchData();
  });

  return !isLoading && <Navigate to="/countries/sort?name=asc" />;
};

export default HomeCountriesPage;
