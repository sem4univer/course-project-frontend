import { FC } from "react";
import styles from "./Latest.module.scss";

import { Card } from "../templates/Card/Card";
import { LatestProps } from "./types";
import { Link } from "react-router-dom";

export const Latest: FC<LatestProps> = ({ items }) => {
  return (
    <div className={styles.latest}>
      <div className={styles.latestTitle}>
        <h2>Shop The Latest</h2>
        <Link to="/">View All</Link>
      </div>
      <div className={styles.products}>
        {items.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};
