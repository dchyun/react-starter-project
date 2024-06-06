import styles from "../styles/page.module.scss";
import Button from "../components/button";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello World</h1>
      <Button></Button>
    </main>
  );
}
