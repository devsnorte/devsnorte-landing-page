import { EventContent } from "@/components/Events/EventContent";
import { useTranslation } from "next-i18next";

export const useLandingPageInfos = () => {
  const { t } = useTranslation();
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
      title: t("events"),
      info: <>{<EventContent /> }</>,
    },
  ];
  return infos;
};
