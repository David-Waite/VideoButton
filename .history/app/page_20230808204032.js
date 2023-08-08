import Image from "next/image";
import styles from "./page.module.css";
import VideoButton from "./components/VideoButton";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Feeling pizza</h1>
      <VideoButton />
    </main>
  );
}
