import Image from "./components/Image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <h1 className={styles.h1}>Det här är din TodoApp!</h1>
      <main className={styles.container}>
        <Image />
      </main>
    </>
  );
}
