import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import Logo from "../logo/Logo";

const links = [
  {
    id: 1,
    title: "home",
    url: "/",
  },
  { id: 2, title: "overview", url: "/overview" },
  { id: 3, title: "blog", url: "/blog" },
  { id: 4, title: "about", url: "/about" },
  { id: 5, title: "contact", url: "/contact" },
  { id: 6, title: "dashboard", url: "/dashboard" },
  { id: 7, title: "faq", url: "/faq" },
];

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <Logo />
      </Link>

      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <button className={styles.logout}>log out</button>
      </div>
    </div>
  );
};
