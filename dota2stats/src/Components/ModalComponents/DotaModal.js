import React from "react";
import ReactDOM from "react-dom";

import styles from "./DotaModal.module.css";

const Overlay = (props) => {
  return (
    <div className={styles.backdrop}>
      <div className={`${styles.board} ${styles.modal}`}>
        <header className={styles.header}>
          <h2>Your Personalized Dota2 Stats</h2>
        </header>
        <div className={styles.content}>
          <p>Hello Again</p>
          <button className="btn btn-primary">Next Page</button>
        </div>
        <footer className={styles.actions}>
          <button className="btn" onClick={props.toSetShowModal}>
            Okay
          </button>
        </footer>
      </div>
    </div>
  );
};

const DotaModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay toSetShowModal={props.toSetShowModal} />,
        document.querySelector("#modal-root")
      )}
    </>
  );
};
export default DotaModal;
