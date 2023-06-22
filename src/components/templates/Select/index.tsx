import { SelectProps } from "./types";

import styles from "./Select.module.scss";

export const Select: React.FC<SelectProps> = ({ name, options, onChange }) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };

  return (
    <select
      className={styles.select}
      name={name}
      id={name}
      onChange={handleSelectChange}
    >
      <option disabled selected value="">
        {name} by
      </option>
      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
};
