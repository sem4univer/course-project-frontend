import { FC } from "react";
import { CardProps } from "./types";
import styles from "./Card.module.scss";

export const Card: FC<CardProps> = ({ title, price, image }) => {
  return (
    <div className={styles.card}>
      <img src={`src/assets/${image}`} alt={title} />
      <p>{title}</p>
      <span>{price}</span>
    </div>
  );
};
