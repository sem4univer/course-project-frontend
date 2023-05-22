import { Link } from "react-router-dom";

import styles from "./Home.module.scss";

import { Page } from "../../components/templates/Page";
import { Hoops } from "../../components/Hoops";
import { Latest } from "../../components/Latest";

import { productItems } from "./constants";

export const Home: React.FC = () => {
  return (
    <Page className={styles.home}>
      <Hoops />
      <div className={styles.latestTitle}>
        <h2>Shop The Latest</h2>
        <Link to="/shop">View All</Link>
      </div>
      <Latest items={productItems} />
    </Page>
  );
};
