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
    <div>
      <div>yeet</div>
      <video
        onClick={handleClick}
        ref={viedoRef}
        className={styles.video}
        width="320"
        height="100"
        setPlay={play}
        muted
      >
        <source src="/video.mp4" />
      </video>
    </div>
  );
}
