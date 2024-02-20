import { EventCardProps } from '@/types/events';
import Link from 'next/link';

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
      <Link href={event.url}>
        <div className="max-w-sm w-full lg:max-w-full lg:flex my-2 rounded-lg">
      <div className=" lg:h-auto lg:w-32 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url('${event.images.original}')` }} title="Imagem do Evento">
      </div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-2">
          <p className="text-brand font-bold text-xl">{event.name}</p>
          <p className="text-gray-700 text-base">{event.location.city}</p>
        </div>
        <div className="flex items-center">
            <p className="text-gray-600">{event.end_date_formats.pt}</p>
        </div>
      </div>
      </div>
      </Link>
  );
};