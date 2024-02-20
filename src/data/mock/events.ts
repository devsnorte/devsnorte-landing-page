import { Event } from "@/types/events";
export const mockEvents: Event[] =[
    {
      name: "#15 Meetup Devs Norte",
      location: {
        address: "Rua Municipalidade",
        address_alt: "Auditório Estácio do Pará, 2º Andar, Bloco D",
        city: "Belém",
        address_num: "839",
        name: "Estácio Pará - FAP",
        lon: -48.4919638,
        state: "PA",
        neighborhood: "Reduto",
        zip_code: "66050-350",
        lat: -1.4411707
      },
      images: {
        original: "https://images.sympla.com.br/64e39c20a76fa.png",
        xs: "https://images.sympla.com.br/64e39c20a76fa-xs.png",
        lg: "https://images.sympla.com.br/64e39c20a76fa-lg.png"
      },
      start_date_formats: {
        pt: "Sab, 26 Ago - 2023 · 08:30",
        en: "Sat, 26 Aug - 2023 · 08:30",
        es: "Sab, 26 Ago - 2023 · 08:30"
      },
      end_date_formats: {
        pt: "Sab, 26 Ago - 2023 · 12:00",
        en: "Sat, 26 Aug - 2023 · 12:00",
        es: "Sab, 26 Ago - 2023 · 12:00"
      },
      url: "https://www.sympla.com.br/evento/15-meetup-devs-norte/2128950"
    },
		{
			images: {
				original: "https://images.sympla.com.br/6474fa5055ffc.png",
				xs: "https://images.sympla.com.br/6474fa5055ffc-xs.png",
				lg: "https://images.sympla.com.br/6474fa5055ffc-lg.png"
			},
			start_date_formats: {
				pt: "Sab, 03 Jun - 2023 · 09:00",
                en: "Sat, 03 Jun - 2023 · 09:00",
				es: "Sab, 03 Jun - 2023 · 09:00"
			},
			end_date_formats: {
				pt: "Sab, 03 Jun - 2023 · 12:00",
				en: "Sat, 03 Jun - 2023 · 12:00",
				es: "Sab, 03 Jun - 2023 · 12:00"
			},
			name: "#12 Meetup Devs Norte | Castanhal",
			location: {
				address: "Rodovia BR",
				address_alt: "",
				city: "Castanhal",
				address_num: "0",
				name: "Estácio Castanhal | Apeú",
				lon: -47.9366629,
				state: "PA",
				neighborhood: "Apeú",
				zip_code: "68740-420",
				lat: -1.305888
			},
			url: "https://www.sympla.com.br/evento/12-meetup-devs-norte-castanhal/2012441"
		},
    // adicione outros eventos mockados aqui
  ];