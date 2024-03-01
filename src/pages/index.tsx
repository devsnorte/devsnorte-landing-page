import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import SectionPrincipal from "@/components/Section/Section";
import { exampleImages } from "@/data/mock/gallery";
import { NextPageContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <SectionPrincipal />
      <Gallery images={exampleImages}/>
      <Newsletter  />
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
