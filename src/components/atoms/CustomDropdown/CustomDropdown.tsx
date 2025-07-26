"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./CustomDropdown.module.scss";
import { OPTIONS } from "@/constants/constants";
import ArrowRightIcon from "@/assets/icons/ArrowRightIcon";

export type Option = {
  id: "asc" | "desc";
  name: string;
};

type DropDownProps = {
  selectedItem: Option;
  setSelectedItem: (option: Option) => void;
};

export default function CustomDropdown({
  selectedItem,
  setSelectedItem,
}: DropDownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (option: Option) => {
    setSelectedItem(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button className={styles.dropdownToggle} onClick={toggleDropdown}>
        {selectedItem?.id ? `Sort by: ${selectedItem?.name}` : "Pick option"}
        <ArrowRightIcon rotate={isOpen ? 270 : 90} />
      </button>

      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {OPTIONS.map((option) => (
            <li
              key={option.id}
              onClick={() => handleSelect(option as Option)}
              className={`${styles.menuItem} ${
                selectedItem?.id === option?.id ? styles.active : ""
              }`}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}




