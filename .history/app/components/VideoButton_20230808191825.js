import styles from "./videobutton.module.css";
export default function VideoButton() {
  return (
    <div>
      <video
        className={styles.video}
        width="320"
        height="240"
        autoPlay
        loop
        playsinline
        src="/video.mp4"
        type="video/mp4"
        play
      ></video>
    </div>
  );
}
