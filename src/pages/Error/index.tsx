import { Link } from "react-router-dom";
import { Button } from "../../components/templates/Button";
import { Page } from "../../components/templates/Page";

import styles from "./Error.module.scss";

export const Error: React.FC = () => {
  return (
    <Page className={styles.error}>
      <h1>404 Error</h1>
      <p>This page not found; back to home and start again</p>
      <Link to="/">
        <Button color="white">Homepage</Button>
      </Link>
    </Page>
  );
};
