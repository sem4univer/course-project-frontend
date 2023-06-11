import { useParams } from "react-router-dom";

import styles from "./Similar.module.scss";

import { useTypedSelector } from "../../hooks/redux";
import { Product } from "./types";
import { Card } from "../templates/Card";

const getRandomProduct = (
  products: Product[],
  currentShopId: number
): Product => {
  const filteredProducts = products.filter(
    (product) => product.id !== currentShopId && !product.soldout
  );
  const randomIndex = Math.floor(Math.random() * filteredProducts.length);
  return filteredProducts[randomIndex];
};

export const Similar = () => {
  const { products } = useTypedSelector((state) => state.productReducer);
  const { shopId } = useParams();

  const similarProducts: Product[] = [];
  while (similarProducts.length < 3) {
    const randomProduct = getRandomProduct(products, Number(shopId));
    if (!similarProducts.some((product) => product.id === randomProduct.id)) {
      similarProducts.push(randomProduct);
    }
  }

  return (
    <div className={styles.similar}>
      <h3>Similar items</h3>
      <div className={styles.items}>
        {similarProducts.map((product) => (
          <Card
            key={product.id}
            shopId={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};
