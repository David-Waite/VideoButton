"use client";

import { useState, useRef } from "react";
import styles from "./videobutton.module.css";
export default function VideoButton() {
  const viedoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handleClick() {
    viedoRef.play();
  }

  return (
    <div>
      <div onClick={handleClick}>yeet</div>
      <video
        ref={viedoRef}
        onClick={handleClick}
        className={styles.video}
        width="320"
        height="240"
        setPlay={play}
        muted
      >
        <source src="/video.mp4" />
      </video>
    </div>
  );
}
