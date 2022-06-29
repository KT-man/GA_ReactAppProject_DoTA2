import React from "react";
import styles from "./Overlay.module.css";

const NextButton = (props) => {
  return (
    <>
      <button
        className={`${styles.btn} btn btn-danger`}
        onMouseDown={props.setNextPage}
      >
        Next Page
      </button>
    </>
  );
};

export default NextButton;
