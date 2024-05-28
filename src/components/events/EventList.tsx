import { EventListProps } from '@/types/components/EventsTypes'
import { EventCard } from './EventCard'

export function EventList({ events }: EventListProps) {
  return (
    <div className="flex flex-wrap gap-[5px]">
      {events.map((event, index) => (
        <EventCard event={event} key={index} />
      ))}
    </div>
  )
}
