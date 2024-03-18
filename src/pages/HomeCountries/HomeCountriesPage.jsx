import { useState, useEffect } from "react";
import axios from "axios";
// Components
import Loader from "../../components/Loader/Loader";
import PaginationComponent from "../../components/PaginationComponent/PaginationComponent";

const HomeCountriesPage = ({ url, setContinents }) => {
  // States
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  //   Total number of pages
  const [maxPage, setMaxPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Data: {message, data, continents}
        const { data } = await axios.get(`${url}/countries`);
        setData(data.data);
        setContinents(data.continents);
        // Number of pages
        setMaxPage(Math.ceil(data.data.length / 20));
      } catch (error) {
        console.log("home countries page, error >>> ", error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <PaginationComponent page={page} setPage={setPage} maxPage={maxPage} />
      <div>
        {data.slice((page - 1) * 20, page * 20).map((country, index) => {
          return <div key={index}>{country.name.common}</div>;
        })}
      </div>
    </>
  );
};

export default HomeCountriesPage;
