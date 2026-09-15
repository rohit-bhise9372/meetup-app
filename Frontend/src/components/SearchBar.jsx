
import { useState } from "react";

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  function handleSearch(event) {
    setSearch(event.target.value);
    onSearch(event.target.value);
  }

  return (
    <input
      type="text"
      className="form-control mb-4"
      placeholder="Search event"
      value={search}
      onChange={handleSearch}
    />
  );
}

export default SearchBar;
