import Head from "next/head";
import styles from "./main.module.css";
import Link from "next/link";
import Button from "@material-ui/core/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Trivia Game</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to the Trivia Challenge!</h1>

        <p className={styles.description}>
          You will be presented with 10 True or False questions.
        </p>

        <p className={styles.description}>Can you score 100%?</p>
        <Link href="/questions">
          <Button variant="contained">begin</Button>
        </Link>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/Yue-design"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright SophieLiu@2020 liuyue2@bu.edu
        </a>
      </footer>
    </div>
  );
}
