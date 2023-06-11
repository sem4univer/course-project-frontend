import { SelectProps } from "./types";

import styles from "./Select.module.scss";

export const Select: React.FC<SelectProps> = ({ name, id, value }) => {
  return (
    <select className={styles.select} name={name} id={id}>
      <option value={value}>{value}</option>
    </select>
  );
};
