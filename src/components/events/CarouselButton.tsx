interface ICarouselButton {
  children: React.ReactNode
  classname?: string | undefined
  disabled: boolean
  onClick: () => void
}

export function CarouselButton({ children, classname, onClick, disabled }: ICarouselButton) {
  return (
    <button className={classname} disabled={disabled} onClick={onClick} type='button'>
      {children}
    </button>
  )
}
