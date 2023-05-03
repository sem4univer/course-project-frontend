import { FC } from "react";
import cn from "classnames";
import { PageProps } from "./types";

import styles from "./page.module.scss";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const Page: FC<PageProps> = ({
  className,
  children,
  pageClassName,
  headerClassName,
  footerClassName,
  ...props
}) => {
  return (
    <div className={cn(styles.page, pageClassName)}>
      <Header className={headerClassName} />
      <main className={cn(styles.main, className)} {...props}>
        {children}
      </main>
      <Footer className={footerClassName} />
    </div>
  );
};
