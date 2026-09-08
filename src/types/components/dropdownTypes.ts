import { ReactNode } from 'react'

export interface DropDownProps {
  placeholder: ReactNode
  data: { label: string; value: unknown }[]
  onSelect: (_value: unknown) => void
}
