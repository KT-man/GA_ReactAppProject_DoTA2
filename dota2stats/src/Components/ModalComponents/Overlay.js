import React from "react";
import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";

import styles from "./DotaModal.module.css";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";

const Overlay = (props) => {
  return (
    <>
      <div className={styles.backdrop}>
        <div className={`${styles.board} ${styles.modal}`}>
          <h2>Hello</h2>
          {props.pageState === 0 && <PageOne></PageOne>}
          {props.pageState === 1 && <PageTwo></PageTwo>}
        </div>
        <footer className={styles.actions}>
          {props.pageState > 0 && (
            <PreviousButton
              setPreviousPage={props.setPreviousPage}
            ></PreviousButton>
          )}
          <NextButton setNextPage={props.setNextPage}></NextButton>
          <button className="btn" onClick={props.toSetShowModal}>
            Okay
          </button>
        </footer>
      </div>

      {/* <div className={styles.backdrop}>
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
          </div>
          <footer className={styles.actions}>
            {props.pageState > 0 && (
              <PreviousButton
                setPreviousPage={props.setPreviousPage}
              ></PreviousButton>
            )}
            <NextButton setNextPage={props.setNextPage}></NextButton>
            <button className="btn" onClick={props.toSetShowModal}>
              Okay
            </button>
          </footer>
        </div>
      </div> */}
    </>
  );
};

export default Overlay;
