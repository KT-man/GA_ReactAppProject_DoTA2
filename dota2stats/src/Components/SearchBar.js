import React, { useRef, useEffect } from "react";

const SearchBar = (props) => {
  const searchInput = useRef(null);
  const onLoadFocus = () => {
    searchInput.current.focus();
  };

  useEffect(() => {
    onLoadFocus();
  }, [searchInput]);

  return (
    <div className="container" onSubmit={props.handleSubmit}>
      <form>
        <input
          className="col-md-6"
          type="number"
          name="idquery"
          placeholder="Enter Dota/SteamCommunity ID"
          value={props.search}
          ref={searchInput}
          onChange={props.handleSearch}
        ></input>
      </form>
    </div>
  );
};

export default SearchBar;
