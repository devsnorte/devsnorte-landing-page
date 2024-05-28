import { Event } from '@/types/events'

export type EventType = 'future' | 'past';

export const useEvents = () => {
  async function getEvents(type: EventType): Promise<Event[] | undefined> {
    const { data } = await fetch('https://www.sympla.com.br/api/v1/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service: type === 'future' ? '/v4/search' : '/v4/events/past',
        params: {
          only: 'name,images,location,start_date_formats,end_date_formats,url',
          organizer_id: [3125215, 5478152],
          sort: 'date',
          order_by: 'desc',
          limit: '6',
          page: 1,
        },
        ignoreLocation: true,
      }),
    }).then((response) => response.json())

    return data
  }

  return getEvents
}
