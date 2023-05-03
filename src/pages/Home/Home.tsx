import { FC } from "react";
import styles from "./Home.module.scss";
import { Page } from "../../components/templates/Page/Page";
import { Hoops } from "../../components/Hoops/Hoops";
import { Latest } from "../../components/Latest/Latest";
import { productItems } from "./constants";

export const Home: FC = () => {
  return (
    <Page className={styles.home}>
      <Hoops />
      <Latest items={productItems} />
    </Page>
  );
};
