import { Link } from "react-router-dom";
import { useTypedSelector } from "../../hooks/redux";

import styles from "./Home.module.scss";

import { Page } from "../../components/templates/Page";
import { Hoops } from "../../components/Hoops";
import { Latest } from "../../components/Latest";

export const Home: React.FC = () => {
  const { products } = useTypedSelector((state) => state.productReducer);

  return (
    <Page className={styles.home}>
      <Hoops />
      <div className={styles.latestTitle}>
        <h2>Shop The Latest</h2>
        <Link to="/shop">View All</Link>
      </div>
      <Latest items={products} />
    </Page>
  );
};
