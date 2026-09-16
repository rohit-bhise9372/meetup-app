import { useState } from "react";

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  function handleSearch(event) {
    setSearch(event.target.value);
    onSearch(event.target.value);
  }

  return (
    <div className="input-group mb-4">
      <span className="input-group-text bg-white">
        <img src="/search-icon.svg" alt="Search" width="16" height="16" />
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="Search event"
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;