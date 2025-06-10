import React from "react";
import styles from "./page.module.css";
import HomePage from "./entities/Home/Home";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomePage />
    </main>
  );
}
