import { ChangeEvent } from "react";
import cn from "classnames";

import { TextareaProps } from "./types";

import styles from "./Textarea.module.scss";

export const Textarea: React.FC<TextareaProps> = ({
  className,
  placeholder,
  id,
  name,
  value,
  onChange,
}) => {
  const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) onChange(event);
  };

  return (
    <textarea
      className={cn(styles.textarea, className)}
      placeholder={placeholder}
      id={id}
      name={name}
      value={value}
      onChange={onChangeHandler}
    />
  );
};
