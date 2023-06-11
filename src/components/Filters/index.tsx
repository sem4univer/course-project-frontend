import styles from "./Filters.module.scss";

import { Input } from "../templates/Input";
import { RangeInput } from "../templates/RangeInput";
import { Toggle } from "../templates/Toggle";
import { Select } from "../templates/Select";

import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

export const Filters: React.FC = () => {
  return (
    <div className={styles.filters}>
      <Input
        name="search"
        id="search"
        placeholder="Search..."
        svg={SearchIcon}
        className={styles.search}
      />
      <div className={styles.selects}>
        <Select name="shop" id="shop" value="Shop by" />
        <Select name="sort" id="sort" value="Sort by" />
      </div>
      <RangeInput min={0} max={180} />
      <Toggle option="On sale" />
      <Toggle option="In stock" />
    </div>
  );
};
