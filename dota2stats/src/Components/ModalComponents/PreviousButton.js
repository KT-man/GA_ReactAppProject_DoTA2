import React from "react";
import styles from "./Overlay.module.css";

const PreviousButton = (props) => {
  return (
    <>
      <button
        className={`${styles.btn} btn btn-danger`}
        onMouseDown={props.setPreviousPage}
      >
        Previous Page
      </button>
    </>
  );
};

export default PreviousButton;
