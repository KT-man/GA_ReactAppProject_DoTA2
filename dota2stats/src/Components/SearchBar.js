import React, { useState } from "react";

const SearchBar = (props) => {
  return (
    <div className="container" onSubmit={props.handleSubmit}>
      <form>
        <label htmlFor="idquery"></label>
        <input
          type="text"
          name="idquery"
          placeholder="Enter Steam Community ID here"
          value={props.search}
          onChange={props.handleSearch}
        ></input>
      </form>
    </div>
  );
};

export default SearchBar;
