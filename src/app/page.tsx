import Gallery from "@/components/Gallery"
import Header from "@/components/Header";
import Hero from "@/components/Hero"
import SectionPrincipal from "@/components/Section/Section";

const Home = () => {
  return (
    <main>
      <Header />
      <Hero />
      <SectionPrincipal />
      <Gallery />
    </main>
  );
}

export default Home