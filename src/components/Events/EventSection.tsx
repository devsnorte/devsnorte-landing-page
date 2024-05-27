"use client";

import { EventType, useEvents } from "@/hooks/useEvents";
import { useTranslation } from "react-i18next";
import { EventCard, EventCarousel, EventLoader } from ".";
import { useEffect, useState } from "react";
import { Event } from "@/types/events";
import { useBreakpoints } from "@/hooks/useBreakpoints";

interface IEventsContent {
  events: Event[] | undefined;
  isLoading: boolean;
  isClient: boolean;
}

const EventContent = ({ events, isLoading, isClient }: IEventsContent) => {
  const { t } = useTranslation();
  const { isCustomBreakpoint } = useBreakpoints();
  const isMobile = !isCustomBreakpoint(768)

  if (isLoading) return <EventLoader isClient={isClient}/>;

  return (
    <div>
      {!events || events.length === 0 ? (
        <p>{isClient && t("noEvents")}</p>
      ) : (
        <EventCarousel
          isCarouselControls={isMobile}
          options={{ startIndex: 0, dragFree: !isMobile }}
        >
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </EventCarousel>
      )}
    </div>
  );
};

export function EventSection() {
  const { t } = useTranslation();
  const [events, setEvents] = useState<Event[]>();
  const [eventType, setEventType] = useState<EventType>("future");
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const getEvents = useEvents();

  useEffect(() => {
    async function fetch() {
      try {
        const data = await getEvents(eventType);
        if (data) setEvents(data);
      } catch {
        /* Empty */
      } finally {
        setIsLoading(false);
      }
    }
    setIsClient(true);
    setIsLoading(true);
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventType]);

  return (
    <section className="flex flex-col w-full min-[768px]:w-[450px] min-[1080px]:w-[600px]  box-border">
      <div className="flex justify-center mb-4 w-full">
        <button
          onClick={() => setEventType("future")}
          className={`px-4 py-2 mx-2 text-sm font-medium text-black ${
            eventType === "future"
              ? "bg-green-300"
              : "bg-green-200 hover:bg-green-300"
          }`}
        >
          {isClient && t("available")}
        </button>
        <button
          onClick={() => setEventType("past")}
          className={`px-4 py-2 mx-2 text-sm font-medium text-black ${
            eventType === "past"
              ? "bg-green-300"
              : "bg-green-200 hover:bg-green-300"
          }`}
        >
          {isClient && t("closed")}
        </button>
      </div>

      <EventContent events={events} isLoading={isLoading} isClient />
    </section>
  );
}
