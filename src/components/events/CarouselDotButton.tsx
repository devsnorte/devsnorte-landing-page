interface IDotButton {
  children?: React.ReactNode
  classname?: string | undefined
  onClick: () => void
}

export function DotButton({ children, classname, onClick }: IDotButton) {
  return (
    <button className={classname} onClick={onClick} type='button'>
      {children}
    </button>
  )
}
