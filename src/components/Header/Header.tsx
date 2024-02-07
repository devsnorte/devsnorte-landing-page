import Image from "next/image";
import Link from "next/link";

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

const Header = ({ className = "", ...rest }: HeaderProps) => {
  return (
    <header className={`flex flex-col items-center justify-center px-5`}>
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
          <Image
            src="/icons/menu.svg"
            width={60}
            height={60}
            alt="menu"
            className="w-full xl:w-14"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
