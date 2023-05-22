import styles from "./Latest.module.scss";

import { LatestProps } from "./types";

import { Card } from "../templates/Card";

export const Latest: React.FC<LatestProps> = ({ items }) => {
  return (
    <section className={styles.latest}>
      <div className={styles.products}>
        {items.map((item) => (
          <Card
            key={item.id}
            shopId={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            discount={item.discount}
            soldout={item.soldout}
          />
        ))}
      </div>
    </section>
  );
};