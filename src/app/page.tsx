import Gallery from "@/components/Gallery"
import Header from "@/components/Header";
import Hero from "@/components/Hero"
import Section from "@/components/Section"




const Home = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Section.Container>
        <Section.Image src="/images/networking.png" alt="netwotking" />
        <Section.Content variant="black">
          <Section.Title>Networking</Section.Title>
          <Section.Info>
            Eventos de tecnologia (TI) são excelentes oportunidades para
            networking. Esses eventos reúnem pessoas de diversos setores da
            indústria, incluindo desenvolvedores, empresários, investidores,
            especialistas em marketing, designers, entre outros.
          </Section.Info>
        </Section.Content>
      </Section.Container>

      <Section.Container>
        <Section.Image src="/images/palestras.png" alt="palestras" />
        <Section.Content>
          <Section.Title>Palestras</Section.Title>
          <Section.Info>
            Os eventos da Devs Norte são conhecidos por serem excelentes fontes
            de compartilhamento de conhecimento em programação. A Devs Norte é
            uma comunidade de desenvolvedores que promove eventos, meetups e
            workshops para compartilhar ideias, experiências e soluções para os
            desafios enfrentados pelos programadores.
          </Section.Info>
        </Section.Content>
      </Section.Container>

      <Section.Container>
        <Section.Image src="/images/sorteios.png" alt="sorteios" />
        <Section.Content variant="black">
          <Section.Title>Sorteios</Section.Title>
          <Section.Info>
            Durante os eventos, a Devs Norte realiza sorteios de livros, cursos,
            e ferramentas utilizadas por programadores. Os sorteios são uma
            forma divertida de envolver os participantes e estimular a
            participação nos eventos. Eles também incentivam a comunidade de
            desenvolvedores a compartilhar ainda mais conhecimentos e recursos.
          </Section.Info>
        </Section.Content>
      </Section.Container>

      <Gallery />
    </main>
  );
}

export default Home