"use client";

import { useState } from "react";
import styles from "./videobutton.module.css";
export default function VideoButton() {
  const [play, setPlay] = useState(false);

  function handleClick() {
    setPlay(true);
  }
  return (
    <div>
      <div onClick={handleClick}>yeet</div>
      <video
        onClick={handleClick}
        className={styles.video}
        width="320"
        height="240"
        autoPlay={play}
        setPlay={true}
        muted
      >
        <source src="/video.mp4" />
      </video>
    </div>
  );
}
