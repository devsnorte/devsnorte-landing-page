export interface EventLocation {
    address: string;
    address_alt: string;
    city: string;
    address_num: string;
    name: string;
    lon: number;
    state: string;
    neighborhood: string;
    zip_code: string;
    lat: number;
  }
  
  export interface Event {
    name: string;
    location: EventLocation;
    images: {
      original: string;
      xs: string;
      lg: string;
    };
    start_date_formats: {
      pt: string;
      en: string;
      es: string;
    };
    end_date_formats: {
      pt: string;
      en: string;
      es: string;
    };
    url: string;
  }
   export interface EventCardProps {
    event: Event;
  }
  export interface EventListProps {
    events: Event[];
  }
    