"use client";
import { ReactNode, useEffect, useRef, useState } from "react";
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
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && isOpen && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [isOpen]);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (value: unknown) => {
    onSelect(value);
    setOpen(false);
  };

  return (
    <div ref={ref} className={`${styles.dropdown} bg-brand`}>
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
