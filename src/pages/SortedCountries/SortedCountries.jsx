import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const SortedCountries = ({ url }) => {
  // States
  let [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState(searchParams.get("name"));
  console.log("name", name);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${url}/countries/sort?name=${name}`);
        // console.log("param name: ", data.message);
      } catch (error) {
        console.log("sorted countries page: error >>>> ", error);
      }
    };
    fetchData();
  }, [name]);

  return <div>SortedCountries</div>;
};

export default SortedCountries;
