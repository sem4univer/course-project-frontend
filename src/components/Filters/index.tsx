import styles from "./Filters.module.scss";

import { Input } from "../templates/Input";
import { RangeInput } from "../templates/RangeInput";
import { Toggle } from "../templates/Toggle";

import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

export const Filters: React.FC = () => {
  return (
    <div className={styles.filters}>
      <Input
        placeholder="Search..."
        svg={SearchIcon}
        className={styles.search}
      />
      <div className={styles.selects}>
        <select name="shop" id="shop">
          <option value="Shop by">Shop by</option>
        </select>
        <select name="sort" id="sort">
          <option value="Sort by">Sort by</option>
        </select>
      </div>
      <RangeInput min={0} max={180} />
      <Toggle option="On sale" />
      <Toggle option="In stock" />
    </div>
  );
};
