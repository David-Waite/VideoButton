"use client";

import { useState, useRef } from "react";
import styles from "./videobutton.module.css";
import { FaPlay } from "react-icons/fa";
export default function VideoButton() {
  const viedoRef = useRef(null);
  const [play, setPlay] = useState(false);
  const [open, setOpen] = useState(false);

  function handleClick() {
    open ? pauseVideo() : playVideo();
    setPlay((prev) => !prev);
    setOpen((prev) => !prev);
  }

  function playVideo() {
    viedoRef.current.play();
  }

  function pauseVideo() {
    viedoRef.current.pause();
  }

  function handleHoverLeave() {
    pauseVideo();
    setOpen(false);
  }
  const playingStylesContainer = {
    height: open ? "565px" : "50px",
    width: open ? "320px" : "200px",
  };

  const playingStylesText = {
    opacity: open ? "0" : "1",
  };

  return (
    <div
      className={styles.container}
      style={playingStylesContainer}
      onMouseEnter={playVideo}
      onMouseLeave={handleHoverLeave}
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
        loop
        preload="auto"
        controls
        width="320"
        height="240"
        src="/video.mp4"
        playsinline
      ></video>
    </div>
  );
}
