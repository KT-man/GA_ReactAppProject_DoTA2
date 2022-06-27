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
          <p>First Game: {props.userFirstGameDate}</p>
          <br></br>
          <p>Wins: {props.matchesPlayed.win}</p>
          <br></br>
          <p>Losses: {props.matchesPlayed.loss}</p>
          <br></br>
          <p>
            Win/Loss ratio =
            {(props.matchesPlayed.win / props.matchesPlayed.loss).toPrecision(
              3
            )}
          </p>
          <br></br>
          <p>Total Time Losing: {props.matchesPlayed.userTotalLossTime}</p>
          <br></br>
          <div>
            "Friends" that you have lost the most with:
            <table className="table">
              <thead>
                <tr>
                  <th>"Friend"</th>
                  <th>Games Lost</th>
                </tr>
              </thead>
              <tbody>
                <tr></tr>
              </tbody>
            </table>
          </div>
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

export default Overlay;
