import { ChangeEvent } from "react";
import cn from "classnames";

import { InputProps } from "./types";

import styles from "./Input.module.scss";

export const Input: React.FC<InputProps> = ({
  className,
  value,
  onChange,
  placeholder,
  name,
  id,
  svg: SvgComponent,
  required,
}) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(event);
  };

  return (
    <div className={cn(styles.input, className)}>
      <input
        type="text"
        value={value}
        onChange={onChangeHandler}
        name={name}
        id={id}
        placeholder={placeholder}
        required={required}
      />
      {SvgComponent && (
        <button>
          <SvgComponent />
        </button>
      )}
    </div>
  );
};
