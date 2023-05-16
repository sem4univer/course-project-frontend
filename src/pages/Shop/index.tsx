import styles from "./Shop.module.scss";

import { Filters } from "../../components/Filters";
import { Latest } from "../../components/Latest";
import { Page } from "../../components/templates/Page";

import { productItems } from "./constants";

export const Shop: React.FC = () => {
  return (
    <Page className={styles.shop}>
      <h2>Shop The Latest</h2>
      <div className={styles.wrapper}>
        <Filters />
        <Latest items={productItems} />
      </div>
    </Page>
  );
};
