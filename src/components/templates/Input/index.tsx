import cn from "classnames";

import { InputProps } from "./types";

import styles from "./Input.module.scss";

export const Input: React.FC<InputProps> = ({
  className,
  placeholder,
  svg: SvgComponent,
}) => {
  return (
    <div className={cn(styles.input, className)}>
      <input type="text" placeholder={placeholder} />
      <button>
        <SvgComponent />
      </button>
    </div>
  );
};
