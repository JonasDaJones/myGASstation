import Link from "next/link";
import styles from "./crudListHead.module.css";

export default function CrudListHead() {
  return (
    <header className={styles.header}>
      <h2 className={styles.listTitle}>Pedals</h2>
      <Link href="/newpedal" className={styles.addButton}>
        NEW
      </Link>
    </header>
  );
}
