import React from "react";
import styles from "./SearchInput.module.scss";
import SearchIcon from "@/assets/icons/SearchIcon";
// import InfoIcon from "@/assets/icons/InfoIcon"; // Add this or use a placeholder

type SearchInputProps = {
  value: string;
  placeholder?: string;
  hint?: string; // NEW
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  placeholder,
  onChange,
  hint  ,
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
          {/* <InfoIcon /> */}
          {hint}
        </div>
      )}
    </div>
  );
};

export default SearchInput;


