'use client'
import { ReactNode, useEffect, useRef, useState } from 'react'
import styles from './Dropdown.module.css'
import Arrow from '/public/icons/arrow.svg'

interface DropDownProps {
  placeholder: ReactNode
  data: { label: string; value: unknown }[]
  onSelect: (_value: unknown) => void
}

export function Dropdown({ data, onSelect, placeholder }: DropDownProps) {
  const [isOpen, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && isOpen && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [isOpen])

  const toggleDropdown = () => setOpen(!isOpen)

  const handleItemClick = (value: unknown) => {
    onSelect(value)
    setOpen(false)
  }

  return (
    <div className={styles.dropdown} ref={ref}>
      <div className={styles.header} onClick={toggleDropdown}>
        <span className={styles.dropdownPlaceholder}>{placeholder}</span>
        <Arrow className={` ${styles.icon} ${isOpen && styles.open}`} />
      </div>
      {isOpen ? (
        <div className={`${styles.body} ${isOpen && styles.open}`}>
          {data.map((item) => (
            <div className={styles.dropdownItem} key={item.label} onClick={() => handleItemClick(item.value)}>
              {item.label}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}
