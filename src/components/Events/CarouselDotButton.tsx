interface IDotButton {
  children?: React.ReactNode,
  classname?: string | undefined,
  onClick: () => void
}

export const DotButton = ({
  children,
  classname,
  onClick
}: IDotButton) => (
  <button type="button" className={classname} onClick={onClick}>
    {children}
  </button>
);
