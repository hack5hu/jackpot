import React from "react";
import styles from "./SearchInput.module.scss";
import SearchIcon from "@/assets/icons/SearchIcon";

type SearchInputProps = {
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  placeholder,
  onChange,
  ...rest
}) => {
  return (
    <div className={styles.searchWrapper}>
      <div className={styles.icon}>
        <SearchIcon />
      </div>

      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={onChange}
        placeholder={placeholder || "Search..."}
        {...rest}
      />
    </div>
  );
};

export default SearchInput;






