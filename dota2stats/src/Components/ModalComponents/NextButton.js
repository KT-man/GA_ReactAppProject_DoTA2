import React from "react";

const NextButton = (props) => {
  return (
    <>
      <button className="btn btn-primary" onClick={props.setNextPage}>
        Next Page
      </button>
    </>
  );
};

export default NextButton;
