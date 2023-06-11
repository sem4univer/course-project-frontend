import { Link } from "react-router-dom";
import cn from "classnames";

import { HeaderProps } from "./types";

import styles from "./Header.module.scss";

import { ReactComponent as SearchIcon } from "../../../assets/icons/search.svg";
import { ReactComponent as UserIcon } from "../../../assets/icons/user.svg";
import { ReactComponent as ShoppingCartIcon } from "../../../assets/icons/shopping-cart.svg";

export const Header: React.FC<HeaderProps> = ({
  className,
  onClickCart,
  ...props
}) => {
  return (
    <header className={cn(styles.header, className)} {...props}>
      <Link to="/" className={styles.title}>
        Shoppe
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/">Blog</Link>
          </li>
          <li>
            <Link to="/">Our story</Link>
          </li>
        </ul>
        <svg
          width="1"
          height="17"
          viewBox="0 0 1 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.5"
            y1="-2.18557e-08"
            x2="0.500001"
            y2="17"
            stroke="#707070"
          />
        </svg>
        <ul className={styles.medias}>
          <li>
            <Link to="/">
              <SearchIcon />
            </Link>
          </li>
          <li className={styles.drawer}>
            <ShoppingCartIcon onClick={onClickCart} />
          </li>
          <li>
            <Link to="/">
              <UserIcon />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
