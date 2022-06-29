import React, { useRef, useEffect } from "react";

const SearchBar = (props) => {
  const searchInput = useRef(null);
  const onLoadFocus = () => {
    searchInput.current.focus();
  };

  useEffect(() => {
    onLoadFocus();
  }, [searchInput]);

  const checkInput = (event) => {
    if (searchInput.current.value.length === 0) {
      alert("Please enter your Dota ID!");
    }
  };

  return (
    <div className="container" onSubmit={props.handleSubmit}>
      <form>
        <input
          type="text"
          name="idquery"
          placeholder="Enter Dota ID here"
          value={props.search}
          ref={searchInput}
          onChange={props.handleSearch}
        ></input>
      </form>
    </div>
  );
};

export default SearchBar;
