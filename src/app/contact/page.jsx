import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { Button } from "@/components/button/Button@";

export default function contact() {
  return (
    <>
      <h1 className={styles.pageTitle}>feel free to contact me</h1>;
      <section className={styles.container}>
        <figure className={styles.item}>
          <Image
            src="https://images.unsplash.com/photo-1565052161621-0f02dee7b3a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            alt=""
            width={300}
            height={400}
            className={styles.img}
          />
          <figcaption className={styles.imgCredit}>
            Foto by{" "}
            <a href="https://unsplash.com/de/@jamesoliverbarr?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              <strong>James Barr</strong>
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/de/fotos/jDAexDhJiaI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              <strong>Unsplash</strong>
            </a>
          </figcaption>
        </figure>
        <form className={styles.form}>
          <label htmlFor="name-input" className={styles.label}>
            name
          </label>
          <input
            id="name-input"
            type="text"
            placeholder="name"
            className={styles.input}
          />
          <label htmlFor="email-input" className={styles.label}>
            email
          </label>
          <input
            id="email-input"
            type="email"
            placeholder="email"
            className={styles.input}
          />
          <label htmlFor="text-input" className={styles.label}>
            textinput
          </label>
          <textarea
            id="text-input"
            className={styles.textArea}
            placeholder="your message"
            cols="28"
            rows="6"
          ></textarea>
          <div className={styles.button}>
            <Button url="#" text="send" />
          </div>
        </form>
      </section>
    </>
  );
}
