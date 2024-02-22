"use client";
import { ReactNode, useState } from "react";
import styles from "./dropdown.module.css";
import Arrow from "/public/icons/arrow.svg";

export const Dropdown = ({
  data,
  onSelect,
  placeholder,
}: {
  placeholder: ReactNode;
  data: { label: string; value: unknown }[];
  onSelect: (value: unknown) => void;
}) => {
  const [isOpen, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (value: unknown) => {
    onSelect(value);
    setOpen(false);
  };

  return (
    <div className={`${styles.dropdown} bg-brand`}>
      <div className={styles.header} onClick={toggleDropdown}>
        <span className={styles.dropdownPlaceholder}>{placeholder}</span>
        <Arrow className={` ${styles.icon} ${isOpen && styles.open}`}></Arrow>
      </div>
      {isOpen && (
        <div className={`${styles.body} ${isOpen && styles.open} bg-brand`}>
          {data.map((item) => (
            <div key={item.label} className={styles.dropdownItem} onClick={() => handleItemClick(item.value)}>
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
