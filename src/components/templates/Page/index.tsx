import cn from "classnames";

import { PageProps } from "./types";

import styles from "./page.module.scss";

import { Header } from "../Header";
import { Footer } from "../Footer";
import Drawer from "../../Drawer";
import { useState } from "react";

export const Page: React.FC<PageProps> = ({
  className,
  children,
  pageClassName,
  headerClassName,
  footerClassName,
  ...props
}) => {
  const [cartOpened, setCartOpened] = useState(false);

  return (
    <div className={cn(styles.page, pageClassName)}>
      <Drawer opened={cartOpened} onCloseCart={() => setCartOpened(false)} />
      <Header
        className={headerClassName}
        onClickCart={() => setCartOpened(true)}
      />
      <main className={cn(styles.main, className)} {...props}>
        {children}
      </main>
      <Footer className={footerClassName} />
    </div>
  );
};
