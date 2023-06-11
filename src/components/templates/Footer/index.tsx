import { Link } from "react-router-dom";
import cn from "classnames";

import styles from "./Footer.module.scss";

import { FooterProps } from "./types";

import { Input } from "../Input";

import { ReactComponent as FacebookIcon } from "../../../assets/icons/facebook.svg";
import { ReactComponent as TwitterIcon } from "../../../assets/icons/twitter.svg";
import { ReactComponent as InstagramIcon } from "../../../assets/icons/instagram.svg";
import { ReactComponent as LinkedinIcon } from "../../../assets/icons/linkedin.svg";
import { ReactComponent as ArrowIcon } from "../../../assets/icons/arrow.svg";

export const Footer: React.FC<FooterProps> = ({ className, ...props }) => {
  return (
    <footer className={cn(styles.footer, className)} {...props}>
      <div className={styles.terms}>
        <ul>
          <li>
            <Link to="/">Contact</Link>
          </li>
          <li>
            <Link to="/">Terms of services</Link>
          </li>
          <li>
            <Link to="/">Shipping and returns</Link>
          </li>
        </ul>
        <p>
          © 2021 Shelly. <span>Terms of use</span> and
          <span> privacy policy.</span>
        </p>
      </div>
      <div className={styles.socialMedias}>
        <Input
          className={styles.email}
          placeholder="Give an email, get the newsletter."
          name="email"
          id="email"
          svg={ArrowIcon}
        />
        <div className={styles.logos}>
          <Link to="/">
            <LinkedinIcon />
          </Link>
          <Link to="/">
            <FacebookIcon />
          </Link>
          <Link to="/">
            <InstagramIcon />
          </Link>
          <Link to="/">
            <TwitterIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
};
