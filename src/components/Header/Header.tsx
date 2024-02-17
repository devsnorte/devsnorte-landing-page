import Image from "next/image";
import Link from "next/link";
import MenuIcon from "../MenuIcon/MenuIcon";

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

const Header = ({ className = "", ...rest }: HeaderProps) => {
  return (
    <header className={`flex flex-col items-center justify-center px-5`}>
      <link
        rel="icon"
        href="/icons/favicon.svg"
        type="image/svg"
        sizes="32x32"
      />
      <div className="flex justify-between w-full h-16 max-w-screen-lg pt-10">
        <Link href="/">
          <div className="hover:pointer"></div>
          <Image
            src="/icons/logo.svg"
            width={188}
            height={60}
            alt="devs norte logo"
            className="w-full xl:w-44"
          />
        </Link>

        <div className="hover:pointer">
          <MenuIcon/>
        </div>
      </div>
    </header>
  );
};

export default Header;
