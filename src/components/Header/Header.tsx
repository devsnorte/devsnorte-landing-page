import Image from "next/image";
import Link from "next/link";
import { Dropdown } from "../DropDown/Dropdown";
import { useRouter } from "next/router";
import Translate from "/public/icons/translate.svg";
import { useTranslation } from "next-i18next";
import { useLandingPageInfos } from "@/hooks/useLandingPageInfos";

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

const Header = ({ className = "", ...rest }: HeaderProps) => {
  const router = useRouter();
  const { t } = useTranslation();
  const sections = useLandingPageInfos();
  const onSelectLanguage = (value: string) => {
    router.push(router.pathname, router.asPath, { locale: value });
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
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
            <Dropdown
              placeholder={<Image src="/icons/menu.svg" width={50} height={50} alt="menu" className="w-6 h-6" />}
              onSelect={(value) => scrollToSection(value as string)}
              data={[...sections.map((section) => ({ label: section.title, value: section.title }))]}
            />
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
