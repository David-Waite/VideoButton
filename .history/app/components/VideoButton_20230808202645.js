"use client";

import { useState, useRef } from "react";
import styles from "./videobutton.module.css";
import { FaPlay } from "react-icons/fa";
export default function VideoButton() {
  const viedoRef = useRef(null);
  const [play, setPlay] = useState(false);
  const [open, setOpen] = useState(false);

  function handleClick() {
    play ? viedoRef.current.pause() : viedoRef.current.play();
    setPlay((prev) => !prev);
  }

  const playingStylesContainer = {
    height: play ? "565px" : "50px",
    width: play ? "320px" : "200px",
  };

  const playingStylesText = {
    display: play ? "none" : "flex",
  };

  return (
    <div
      className={styles.container}
      style={playingStylesContainer}
      onMouseEnter={() => setPlay(true)}
    >
      <div
        className={styles.buttonText}
        onClick={handleClick}
        style={playingStylesText}
      >
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
