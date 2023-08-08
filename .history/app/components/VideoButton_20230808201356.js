"use client";

import { useState, useRef } from "react";
import styles from "./videobutton.module.css";
import { FaPlay } from "react-icons/fa";
export default function VideoButton() {
  const viedoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handleClick() {
    setPlay(true);
    viedoRef.current.play();
  }

  const playingStyles = {
    height: 565,
    width: 320,
  };

  return (
    <div className={styles.container} style={play && playingStyles}>
      <div className={styles.buttonText} onClick={handleClick}>
        <p>Watch video</p>
        <FaPlay />
      </div>

      <video
        onClick={handleClick}
        ref={viedoRef}
        className={styles.video}
        setPlay={play}
        width="320"
        height="240"
        src="/video.mp4"
        muted
      ></video>
    </div>
  );
}
