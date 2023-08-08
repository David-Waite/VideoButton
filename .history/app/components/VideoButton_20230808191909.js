import styles from "./videobutton.module.css";
export default function VideoButton() {
  return (
    <div>
      <video className={styles.video} width="320" height="240" controls>
        <source src="/video.mp4" />
      </video>
    </div>
  );
}
