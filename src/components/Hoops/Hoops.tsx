import { FC } from "react";
import styles from "./Hoops.module.scss";

export const Hoops: FC = () => {
  return (
    <div className={styles.hoops}>
      <h2>Gold big hoops</h2>
      <p>$ 68,00</p>
      <button>View Product</button>
    </div>
  );
};
