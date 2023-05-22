import cn from "classnames";

import { ButtonProps } from "./types";

import styles from "./Button.module.scss";

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  type,
  color,
}) => {
  const buttonClass = cn(styles.button, className, {
    [styles[color]]: color, // apply the class with the name equal to the value of the color prop
  });

  return (
    <button type={type} className={buttonClass}>
      {children}
    </button>
  );
};
