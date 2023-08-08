"use client";

import { useState, useRef } from "react";
import styles from "./videobutton.module.css";
import { FaPlay } from "react-icons/fa";
export default function VideoButton() {
  const viedoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handleClick() {
    viedoRef.current.play();
  }

  return (
    <div className={styles.container}>
      <p>Watch video</p>
      <FaPlay />
      <video
        onClick={handleClick}
        ref={viedoRef}
        className={styles.video}
        setPlay={play}
        src="/video.mp4"
        muted
      ></video>
    </div>
  );
}
