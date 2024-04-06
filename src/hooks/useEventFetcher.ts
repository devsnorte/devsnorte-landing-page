import { Event } from '@/types/events';
import { useEffect, useState } from 'react';

export const useEventFetcher = (initialEventType: 'future' | 'past' = 'future') => {
    const [events, setEvents] = useState<Event[]>([]);
    const [eventType, setEventType] = useState<string>(initialEventType);

    useEffect(() => {
        const fetchData = async (type: string) => {
            try {
                const response = await fetch("https://www.sympla.com.br/api/v1/search", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        service: type === 'future' ? "/v4/search" : "/v4/events/past",
                        params: {
                            only: "name,images,location,start_date_formats,end_date_formats,url",
                            organizer_id: [3125215, 5478152],
                            sort: "date",
                            order_by: "desc",
                            limit: "6",
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

        fetchData(eventType);
    }, [eventType]);

    const toggleEventType = () => {
        setEventType(prevType => prevType === 'future' ? 'past' : 'future');
    };

    return { events, eventType, toggleEventType };
};