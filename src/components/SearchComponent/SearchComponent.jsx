import { useNavigate } from "react-router-dom";
import getContinentsArray from "../../utils/getContinentsArray";

const SearchComponent = ({
  setPage,
  setSearchParams,
  setName,
  setPop,
  setArea,
  continents,
  languages,
  currencies,
}) => {
  const navigate = useNavigate();

  const handleSortSelect = (event) => {
    setPage(1);
    const arr = event.target.value.split("-");
    // console.log("arr", arr);
    if (arr[0] === "name") {
      setSearchParams({ name: arr[1] });
      setName(arr[1]);
      setPop("");
      setArea("");
      navigate(`/countries/sort?name=${arr[1]}`);
    }
    if (arr[0] === "pop") {
      setSearchParams({ pop: arr[1] });
      setPop(arr[1]);
      setName("");
      setArea("");
      navigate(`/countries/sort?pop=${arr[1]}`);
    }
    if (arr[0] === "area") {
      setArea(arr[1]);
      setName("");
      setPop("");
      navigate(`/countries/sort?area=${arr[1]}`);
    }
  };

  const handleSearchSelect = (event) => {
    // console.log("search, select ", event.target.value);
    const value = event.target.value;
    if (value === "continent") {
      console.log(getContinentsArray(continents));
    }
  };

  return (
    <>
      {/* Sort select */}
      <select name="sort" id="sort-select" onChange={handleSortSelect}>
        <option value="name-asc">Name A-Z</option>
        <option value="name-desc">Name Z-A</option>
        <option value="pop-asc">Population +</option>
        <option value="pop-desc">Population -</option>
        <option value="area-asc">Area +</option>
        <option value="area-desc">Area -</option>
      </select>
      {/* Search */}
      <div>
        <div>
          <input type="text" placeholder="Search by name" />
          <button>Search</button>
        </div>
        {/* <label>Search by</label> */}
        <select name="search" id="search-select" onChange={handleSearchSelect}>
          <option value="">Search by</option>
          <option value="continent">Continent</option>
          <option value="language">Language</option>
          <option value="currency">Currency</option>
        </select>
      </div>
    </>
  );
};

export default SearchComponent;
