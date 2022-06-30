import React from "react";
//---------- Button Components
import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";
//---------- Page Components
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import PageFour from "./PageFour";

import styles from "./Overlay.module.css";

const Overlay = (props) => {
  return (
    <>
      <div className={styles.backdrop}>
        <div className={`${styles.board} ${styles.modal}`}>
          <header className={styles.header}>
            <h2>Dota2 Wrapped</h2>
          </header>
          <div className={styles.content}>
            {/* //------------------------Conditional rendering to match pageState to decide which Page component to render */}
            {props.pageState === 0 && (
              <PageOne tempDate={props.tempDate}></PageOne>
            )}
            {props.pageState === 1 && (
              <PageTwo matchesPlayed={props.matchesPlayed}></PageTwo>
            )}
            {props.pageState === 2 && (
              <PageThree
                matchesPlayed={props.matchesPlayed}
                pageState={props.pageState}
              ></PageThree>
            )}
            {props.pageState === 3 && (
              <PageFour
                listOfTopLosers={props.listOfTopLosers}
                key={Math.random()}
              ></PageFour>
            )}

            {/* //-----------END--------Conditional rendering to match pageState to decide which Page component to render */}
          </div>

          <footer className={styles.actions}>
            {/* //------------------------Conditional rendering to match to render NextPage and PreviousPage buttons accordingly */}
            {props.pageState > 0 && (
              <PreviousButton
                setPreviousPage={props.setPreviousPage}
              ></PreviousButton>
            )}
            {props.pageState < 3 && (
              <NextButton setNextPage={props.setNextPage}></NextButton>
            )}
            {props.pageState === 3 && (
              <button
                className={`${styles.btn} btn btn-danger`}
                onClick={props.toSetShowModal}
              >
                Quit (dota)
              </button>
            )}
          </footer>
        </div>
      </div>
    </>
  );
};

export default Overlay;
