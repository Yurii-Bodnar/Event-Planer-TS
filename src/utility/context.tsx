import { createContext, useState } from "react";
import {
  EventDetailsContextType,
  Events,
  EventsContextType,
  ProviderProp,
  SortByCategoryType,
} from "../types/events";

export const EventDetails = createContext<EventDetailsContextType>({
  eventDetails: [],
  setEventDetails: () => {},
});
export const EventsContext = createContext<EventsContextType>({
  events: [],
  setEvents: () => {},
});
export const SortByCategory = createContext<SortByCategoryType>({
  sortByCategory: [],
  setSortByCategory: () => {},
});

export const EventsContextProvider = ({ children }: ProviderProp) => {
  const [events, setEvents] = useState<Events[]>([]);
  return (
    <EventsContext.Provider value={{ events, setEvents }}>
      {children}
    </EventsContext.Provider>
  );
};

export const EventDetailsProvider = ({ children }: ProviderProp) => {
  const [eventDetails, setEventDetails] = useState<Events[]>([]);
  return (
    <EventDetails.Provider value={{ eventDetails, setEventDetails }}>
      {children}
    </EventDetails.Provider>
  );
};

export const SortByCategoryProvider = ({ children }: ProviderProp) => {
  const [sortByCategory, setSortByCategory] = useState<Events[]>([]);
  return (
    <SortByCategory.Provider value={{ sortByCategory, setSortByCategory }}>
      {children}
    </SortByCategory.Provider>
  );
};
