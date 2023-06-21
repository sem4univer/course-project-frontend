import { useState } from "react";
import styles from "./Account.module.scss";
import { Page } from "../../components/templates/Page";
import { SignIn } from "../../components/SignIn";
import { Register } from "../../components/Register";

export const Account: React.FC = () => {
  const [side, setSide] = useState<"Sign in" | "Register">("Sign in");

  return (
    <Page className={styles.account}>
      <h1 className={styles.title}>My account</h1>
      <div className={styles.sides}>
        <button
          className={side === "Sign in" ? `${styles.active}` : ""}
          onClick={() => setSide("Sign in")}
        >
          Sign in
        </button>
        <button
          className={side === "Register" ? `${styles.active}` : ""}
          onClick={() => setSide("Register")}
        >
          Register
        </button>
      </div>
      {side === "Sign in" && <SignIn />}
      {side === "Register" && <Register />}
    </Page>
  );
};
