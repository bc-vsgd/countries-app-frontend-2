import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const SearchComponent = () => {
  // States
  const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState(searchParams.get("name" || "asc"));

  const navigate = useNavigate();
  const handleSelect = (event) => {
    const arr = event.target.value.split("-");
    // console.log("arr", arr);
    setSearchParams({ name: arr[1] });
    setName(arr[1]);
    navigate(`/countries/sort?name=${arr[1]}`);
  };

  return (
    <>
      <select
        name="sort"
        id="sort-select"
        onChange={(event) => {
          handleSelect(event);
        }}
      >
        <option value="name-asc">Name A-Z</option>
        <option value="name-desc">Name Z-A</option>
      </select>
    </>
  );
};

export default SearchComponent;
