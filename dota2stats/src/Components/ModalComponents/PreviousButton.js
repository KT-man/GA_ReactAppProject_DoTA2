import React from "react";

const PreviousButton = (props) => {
  return (
    <>
      <button className="btn btn-primary" onClick={props.setPreviousPage}>
        Previous Page
      </button>
    </>
  );
};

export default PreviousButton;
