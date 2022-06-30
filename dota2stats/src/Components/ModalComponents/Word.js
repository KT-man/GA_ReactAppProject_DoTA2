import React, { useEffect, useState } from "react";
import styles from "./Word.module.css";
import achievements from "../../AchievementHours/achievementsHours";

const Word = (props) => {
  let words = [];

  if (props.loseHours < 500) {
    words = [...achievements.hours500];
  } else if (props.loseHours < 1000) {
    words = [...achievements.hours1000];
  } else if (props.loseHours < 1500) {
    words = [...achievements.hours1500];
  } else {
    words = [...achievements.hours2000];
  }

  let i = 0,
    part,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 80;

  const [word, setWord] = useState(" ");

  function wordflick() {
    setInterval(wordMovement, speed);
  }

  function stopWordflick() {
    clearInterval(wordMovement);
  }

  function wordMovement() {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;

        if (skip_count === skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    } else {
      if (offset === 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count === 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }
    setWord(part);
  }

  useEffect(() => {
    wordflick();

    return () => {
      stopWordflick();
    };
  }, [props.pageState]);

  return <div className={styles.word}>{word}</div>;
};

export default Word;
