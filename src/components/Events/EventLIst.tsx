import { EventListProps } from "@/types/events";
import { EventCard } from "./EventCard";

export const EventList: React.FC<EventListProps> = ({ events }) => {
  return (
    <div className="flex flex-wrap gap-[5px]">
      {events.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
  );
};
