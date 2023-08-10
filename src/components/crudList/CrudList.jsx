import Link from "next/link";
import styles from "./crudList.module.css";
import EditLogo from "../EditLogo";
import RemoveBtn from "../removeButton/RemoveBtn";

const getPedals = async () => {
  try {
    const res = await fetch("http:localhost:3000/api/fxpedals", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("failed to fetch pedals");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading pedals: ", error);
  }
};

export default function PedalsList() {
  return (
    <>
      <div className={styles.border}>
        <div className={styles.container}>
          <div className={styles.textpart}>
            <h2 className={styles.pedalTitle}>Pedal Name</h2>
            <div>description</div>
          </div>
          <div className={styles.iconpart}>
            <Link href={"/editPedal/123"}>
              <EditLogo />
            </Link>
            <RemoveBtn />
          </div>
        </div>
      </div>
    </>
  );
}
