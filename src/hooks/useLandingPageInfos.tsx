import { EventList } from "@/components/Events";
import { useEffect, useState } from "react";

export const useLandingPageInfos = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://www.sympla.com.br/api/v1/search", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service: "/v4/search",
            params: {
              only: "name,images,location,start_date_formats,end_date_formats,url",
              organizer_id: 5478152,
              sort: "date",
              order_by: "desc",
              limit: "3",
              page: 1,
            },
            ignoreLocation: true,
          }),
        });

        if (!response.ok) {
          throw new Error("Erro ao buscar eventos");
        }

        const data = await response.json();
        setEvents(data.data);
      } catch (error) {
        console.error("Erro ao buscar eventos:", error);
      }
    };

    fetchData();
  }, []);

  const infos = [
    {
      image: {
        url: "/images/networking.png",
        alt: "netwotking",
      },
      title: "Networking",
      info: (
        <p>
          Eventos de tecnologia (TI) são excelentes oportunidades para networking. Esses eventos reúnem pessoas de diversos setores da indústria,
          incluindo desenvolvedores, empresários, investidores, especialistas em marketing, designers, entre outros.
        </p>
      ),
    },

    {
      image: {
        url: "/images/sorteios.png",
        alt: "Imagem de Palestra",
      },
      title: "Sorteios",
      info: (
        <p>
          Durante os eventos, a Devs Norte realiza sorteios de livros, cursos, e ferramentas utilizadas por programadores. Os sorteios são uma forma
          divertida de envolver os participantes e estimular a participação nos eventos. Eles também incentivam a comunidade de desenvolvedores a
          compartilhar ainda mais conhecimentos e recursos.
        </p>
      ),
    },
    {
      image: {
        url: "/images/palestras.png",
        alt: "Imagem de Palestra",
      },
      title: "Palestras",
      info: (
        <p>
          Os eventos da Devs Norte são conhecidos por serem excelentes fontes de compartilhamento de conhecimento em programação. A Devs Norte é uma
          comunidade de desenvolvedores que promove eventos, meetups e workshops para compartilhar ideias, experiências e soluções para os desafios
          enfrentados pelos programadores.
        </p>
      ),
    },
    {
      image: {
        url: "/images/eventos.png",
        alt: "Eventos Sympla",
      },
      title: "Próximos Eventos",
      info: (
        <>
          {events.length === 0 ? (
            <p>Ops! Parece que não há eventos disponíveis no momento. Volte mais tarde para verificar novos eventos!</p>
          ) : (
            <EventList events={events} />
          )}
        </>
      ),
    },
  ];
  return infos;
};
