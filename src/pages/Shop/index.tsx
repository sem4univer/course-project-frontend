import { useTypedSelector } from "../../hooks/redux";

import styles from "./Shop.module.scss";

import { Filters } from "../../components/Filters";
import { Latest } from "../../components/Latest";
import { Page } from "../../components/templates/Page";

export const Shop: React.FC = () => {
  const { products } = useTypedSelector((state) => state.productReducer);
  return (
    <Page className={styles.shop}>
      <h2>Shop The Latest</h2>
      <div className={styles.wrapper}>
        <Filters />
        <Latest items={products} />
      </div>
    </Page>
  );
};
