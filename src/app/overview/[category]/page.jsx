import Image from "next/image";
import React from "react";
import { items } from "./data.js";
import { Button } from "@/components/button/Button@";
import styles from "./page.module.css";
import { PageNotFoundError } from "next/dist/shared/lib/utils.js";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }
  return PageNotFoundError;
};

const Category = ({ params }) => {
  let data = getData(params.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="see more" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image className="styles.img" fill={true} src={item.image} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
