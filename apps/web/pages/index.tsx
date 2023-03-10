import { Button } from "ui";
import { Header } from "shared";

import styles from "../styles/index.module.css";

export default function Web() {
  return (
    <div className={styles.container}>
      <h1>Web</h1>
      <Button onClick={() => console.log("Pressed!")} text="Boop" />
      <Header text={""} />
    </div>
  );
}
