import cn from "classnames";

import { ButtonProps } from "./types";

import styles from "./Button.module.scss";

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  type,
  color,
  onClick,
}) => {
  const buttonClass = cn(styles.button, className, {
    [styles[color]]: color,
  });

  return (
    <button type={type} className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};
