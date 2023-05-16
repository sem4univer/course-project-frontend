import cn from "classnames";

import { PageProps } from "./types";

import styles from "./page.module.scss";

import { Header } from "../Header";
import { Footer } from "../Footer";

export const Page: React.FC<PageProps> = ({
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
