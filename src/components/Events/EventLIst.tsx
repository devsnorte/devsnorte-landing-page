import { EventListProps } from "@/types/events";
import { EventCard } from "./EventCard";

export const EventList: React.FC<EventListProps> = ({ events }) => {
  return (
    <div>
      {events.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
  );
};
