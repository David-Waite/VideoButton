"use client";

import { useState, useRef } from "react";
import styles from "./videobutton.module.css";
export default function VideoButton() {
  const viedoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handleClick() {
    viedoRef.current.play();
  }

  return (
    <div className="container">
      <video
        onClick={handleClick}
        ref={viedoRef}
        className={styles.video}
        width="320"
        height="240"
        setPlay={play}
        src="/video.mp4"
        muted
      ></video>
    </div>
  );
}
