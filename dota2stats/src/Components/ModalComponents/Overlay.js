import React from "react";
import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";

import styles from "./DotaModal.module.css";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import PageFour from "./PageFour";
import PageFive from "./PageFive";

const Overlay = (props) => {
  return (
    <>
      <div className={styles.backdrop}>
        <div className={`${styles.board} ${styles.modal}`}>
          {/* <header className={styles.header}>
            <h2>Your Personalized Dota2 Stats</h2>
          </header> */}
          <div className={styles.content}>
            {/* //------------------------Conditional rendering to match pageState to decide which Page component to render */}

            {props.pageState === 0 && (
              <PageOne userFirstGameDate={props.userFirstGameDate}></PageOne>
            )}
            {props.pageState === 1 && (
              <PageTwo matchesPlayed={props.matchesPlayed}></PageTwo>
            )}
            {props.pageState === 2 && (
              <PageThree matchesPlayed={props.matchesPlayed}></PageThree>
            )}
            {props.pageState === 3 && (
              <PageFour listOfTopLosers={props.listOfTopLosers}></PageFour>
            )}
            {props.pageState === 4 && <PageFive></PageFive>}
            {/* //------------------------Conditional rendering to match pageState to decide which Page component to render */}
          </div>

          <footer className={styles.actions}>
            {/* //------------------------Conditional rendering to match to render NextPage and PreviousPage buttons accordingly */}
            {props.pageState > 0 && (
              <PreviousButton
                setPreviousPage={props.setPreviousPage}
              ></PreviousButton>
            )}
            {props.pageState < 4 && (
              <NextButton setNextPage={props.setNextPage}></NextButton>
            )}
            {props.pageState === 4 && (
              <button className="btn" onClick={props.toSetShowModal}>
                Okay
              </button>
            )}
          </footer>
        </div>
      </div>
    </>
  );
};

export default Overlay;
