import { ProductProps } from "./types";

import { Button } from "../templates/Button";
import { Rating } from "../Rating";

import styles from "./ProductCard.module.scss";

import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram.svg";
import { ReactComponent as MailIcon } from "../../assets/icons/mail.svg";
import { ReactComponent as HeartIcon } from "../../assets/icons/heart.svg";

export const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <section className={styles.productCard}>
      <div className={styles.photos}>
        <div>
          {[...Array(4)].map((_, i) => (
            <img
              key={i}
              src={`../src/assets/${product.image}`}
              alt={product.title}
            />
          ))}
        </div>
        <img src={`../src/assets/${product.image}`} alt={product.title} />
      </div>
      <div className={styles.description}>
        <h3>{product.title}</h3>
        <span className={styles.price}>{product.price}</span>
        <div className={styles.reviews}>
          <Rating reviews={product.reviews} />
          <p>{product.reviews.length} customer review</p>
        </div>
        <p className={styles.shortDesc}>{product.description}</p>
        <div className={styles.buttons}>
          <div>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <Button type="button" className={styles.cartButton} color="white">
            Add to cart
          </Button>
        </div>
        <div className={styles.logos}>
          <HeartIcon />
          <svg
            width="1"
            height="17"
            viewBox="0 0 1 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="-2.18557e-08"
              x2="0.500001"
              y2="17"
              stroke="#D8D8D8"
            />
          </svg>
          <div className={styles.medias}>
            <MailIcon />
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
          </div>
        </div>
        <div className={styles.type}>
          <span>SKU:</span>
          <p>{product.sku}</p>
        </div>
        <div className={styles.type}>
          <span>Categories:</span>
          <div className={styles.categories}>
            <p>{product.categories.join(", ")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
