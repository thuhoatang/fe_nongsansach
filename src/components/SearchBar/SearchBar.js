import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <>
      <form className="d-flex">
        <input
          className="me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
    </>
  );
};

export default SearchBar;
