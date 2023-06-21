import { Button } from "../templates/Button";
import { Input } from "../templates/Input";

import styles from "./SignIn.module.scss";

export const SignIn = () => {
  return (
    <form className={styles.signIn}>
      <Input
        className={styles.input}
        placeholder="Login"
        name="login"
        id="login"
        required={true}
      />
      <Input
        className={styles.input}
        placeholder="Password"
        name="password"
        id="password"
        required={true}
      />
      <Button color="black">Sign in</Button>
      <p>Have you forgotten your password?</p>
    </form>
  );
};
