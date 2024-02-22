import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionPrincipal from "@/components/Section/Section";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextPageContext } from "next";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <SectionPrincipal />
      <Gallery />
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
