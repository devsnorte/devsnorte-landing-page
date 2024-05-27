interface ICarouselButton {
  children: React.ReactNode;
  classname?: string | undefined;
  disabled: boolean
  onClick: () => void
}

export const CarouselButton = ({ children, classname, onClick, disabled}: ICarouselButton) => (
  <button className={classname} type="button" onClick={onClick} disabled={disabled}>
    {children}
  </button>
);
