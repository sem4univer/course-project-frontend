import { useState } from "react";

import styles from "./Filters.module.scss";

import { Input } from "../templates/Input";
import { RangeInput } from "../templates/RangeInput";
import { Toggle } from "../templates/Toggle";
import { Select } from "../templates/Select";

import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { FilterProps } from "./types";

const shopOptions = ["Metal", "Gold", "Plastic"];
const sortOptions = ["Ascending price", "Descending price"];

export const Filters: React.FC<FilterProps> = ({
  onChange,
  onSaleChange,
  onStockChange,
  onRangeClick,
  onShopChange,
  onSortChange,
}) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div className={styles.filters}>
      <Input
        name="search"
        id="search"
        placeholder="Search..."
        value={searchValue}
        onChange={handleInputChange}
        svg={SearchIcon}
        className={styles.search}
      />
      <div className={styles.selects}>
        <Select name="Shop" options={shopOptions} onChange={onShopChange} />
        <Select name="Sort" options={sortOptions} onChange={onSortChange} />
      </div>
      <RangeInput onClick={onRangeClick} min={0} max={180} />
      <Toggle option="On sale" onClick={onSaleChange} />
      <Toggle option="In stock" onClick={onStockChange} />
    </div>
  );
};
