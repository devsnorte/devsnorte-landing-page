import Image from "next/image";
import Link from "next/link";
import { Dropdown } from "../DropDown/Dropdown";
import { useRouter } from "next/router";
import Translate from "/public/icons/translate.svg";

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

const Header = ({ className = "", ...rest }: HeaderProps) => {
  const router = useRouter();
  const onSelectLanguage = (value: string) => {
    router.push(router.pathname, router.asPath, { locale: value });
  };

  return (
    <header className={`flex flex-col items-center justify-center px-5`}>
      <link rel="icon" href="/icons/favicon.svg" type="image/svg" sizes="32x32" />
      <div className="flex justify-between w-full h-16 max-w-screen-lg pt-10">
        <Link href="/">
          <div className="hover:pointer"></div>
          <Image src="/icons/logo.svg" width={188} height={60} alt="devs norte logo" className="w-full xl:w-44" />
        </Link>

        <div className="flex gap-[10px] items-center">
          <div className="hover:pointer">
            <Image src="/icons/menu.svg" width={60} height={60} alt="menu" className="w-full xl:w-14" />
          </div>
          <Dropdown
            placeholder={<Translate className="w-6 h-6" />}
            onSelect={(value) => onSelectLanguage(value as string)}
            data={[
              { label: "Portugues", value: "pt" },
              { label: "English", value: "en" },
              { label: "Espanhol", value: "es" },
            ]}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
