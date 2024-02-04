import Image from "next/image"

interface HeaderProps extends React.HTMLAttributes<HTMLElement> { }

const Header = ({ className = '', ...rest }: HeaderProps) => {
    return <header className={`px-6 h-8 flex justify-between ${className}`} {...rest}>
        <Image src="/icons/logo.svg" width={92} height={30} alt="devs norte logo" className="object-contain" />
        <Image src="/icons/menu.svg" width={30} height={30} alt="menu" className="cursor-pointer" />
    </header>
}

export default Header