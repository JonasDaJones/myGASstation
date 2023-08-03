import Image from "next/image";
import styles from "./page.module.css";
import bunchofpedals from "/public/bunchofpedals.png";
import { Navbar } from "@/components/navbar/Navbar@";
import { Footer } from "@/components/footer/Footer@";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className={styles.container}>
        <div className={styles.item}>
          <h1 className={styles.title}>MY G.A.S. STATION</h1>
          <p className={styles.description}>
            nobody tells you if you have to much stuff but you. nobody knows
            about your stuff but you. do you?
          </p>
        </div>
        <div className={styles.item}>
          <Image
            className={styles.breathing}
            src={bunchofpedals}
            alt="Guitar Effect Pedals"
            width={400}
            height={400}
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
