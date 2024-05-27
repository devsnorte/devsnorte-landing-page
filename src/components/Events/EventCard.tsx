import { Event } from "@/types/events";
import Image from "next/image";
import Link from "next/link";

export const EventCard = ({event}: {event: Event}) => {
  return (
    <Link href={event.url} className="flex w-[256px] h-[300px] ml-2">
      <article className="w-[256px] h-[300px] rounded-lg bg-white">
        <div className="bg-cover bg-no-repeat">
          <Image
            className="rounded-t-lg"
            src={event.images.original}
            width={800}
            height={600}
            alt="Imagem do Evento"
          />
        </div>
        <div className="p-6">
          <div className="mb-2">
            <h5 className="text-brand font-bold text-xl">{event.name}</h5>
            <address className="text-gray-700 text-sm font-semibold">
              {event.location.city}
            </address>
          </div>
          <div className="flex items-center">
            <p className="text-gray-600">{event.end_date_formats.pt}</p>
          </div>
        </div>
      </article>
    </Link>
  );
};
