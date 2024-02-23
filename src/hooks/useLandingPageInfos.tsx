import { EventList } from "@/components/Events";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

export const useLandingPageInfos = () => {
  const { t } = useTranslation();
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
        alt: t("netwotking"),
      },
      title: t("Networking"),
      info: <p>{t("networkingSubtitle")}</p>,
    },

    {
      image: {
        url: "/images/sorteios.png",
        alt: "Imagem de Palestra",
      },
      title: t("giveaways"),
      info: <p>{t("giveawaysSubtitle")}</p>,
    },
    {
      image: {
        url: "/images/palestras.png",
        alt: "Imagem de Palestra",
      },
      title: t("lecture"),
      info: <p>{t("lectureSubtitle")}</p>,
    },
    {
      image: {
        url: "/images/eventos.png",
        alt: "Eventos Sympla",
      },
      title: t("nextEvents"),
      info: <>{events.length === 0 ? <p>{t("noEvents")}</p> : <EventList events={events} />}</>,
    },
  ];
  return infos;
};
