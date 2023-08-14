import Link from "next/link";
import React from "react";
import styles from "./page.module.css";

export default function overview() {
  return (
    <section className={styles.container}>
      <h1 className={styles.pageTitle}>the categories</h1>
      <ul className={styles.items}>
        <li className={styles.item}>
          <Link href="/overview/pedals">
            <span className={styles.title}>Pedals</span>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/overview/boards">
            <span className={styles.title}>Boards</span>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/overview/sounds">
            <span className={styles.title}>Sounds</span>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/overview/songs">
            <span className={styles.title}>Songs</span>
          </Link>
        </li>
      </ul>
    </section>
  );
}
