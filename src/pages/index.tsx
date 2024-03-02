import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionPrincipal from "@/components/Section/Section";
import { NextPageContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <SectionPrincipal />
    </div>
  );
};

export default Home;

export const getStaticProps = async (context: NextPageContext) => {
  const { locale } = context;
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
};
