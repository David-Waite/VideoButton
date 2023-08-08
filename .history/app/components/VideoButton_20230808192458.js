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
      <video
        className={styles.video}
        width="320"
        height="240"
        autoPlay={play}
        muted
      >
        <source src="/video.mp4" />
      </video>
    </div>
  );
}
