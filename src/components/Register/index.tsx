import { Button } from "../templates/Button";
import { Input } from "../templates/Input";

import styles from "./Register.module.scss";

export const Register = () => {
  return (
    <form className={styles.register}>
      <Input
        className={styles.input}
        placeholder="Name"
        name="name"
        id="name"
        required={true}
      />
      <Input
        className={styles.input}
        placeholder="Login"
        name="login"
        id="login"
        required={true}
      />
      <Input
        className={styles.input}
        placeholder="Email"
        name="email"
        id="email"
        required={true}
      />
      <Input
        className={styles.input}
        placeholder="Password"
        name="password"
        id="password"
        required={true}
      />
      <Button color="black">Register</Button>
    </form>
  );
};
