import React from "react";
import styles from "./SearchInput.module.scss";
import SearchIcon from "@/assets/icons/SearchIcon";
import { SearchInputProps } from "./type";

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  placeholder,
  onChange,
  hint,
  ...rest
}) => {
  return (
    <div className={styles.searchWrapper}>
      <div className={styles.leftSection}>
        <SearchIcon />
        <input
          type="text"
          className={styles.input}
          value={value}
          onChange={onChange}
          placeholder={placeholder || "Search..."}
          {...rest}
        />
      </div>

      {hint && (
        <div className={styles.hint}>
          {hint}
        </div>
      )}
    </div>
  );
};

export default SearchInput;

