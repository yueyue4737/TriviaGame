import styles from "./Home.module.css";
import Link from "next/link";
import Button from "@material-ui/core/Button";

export default function Result() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Link href="/">
          <Button variant="contained">play again</Button>
        </Link>
      </main>
    </div>
  );
}
