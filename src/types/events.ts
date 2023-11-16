export type Events = {
  title: "";
  description: "";
  date: "";
  time: "";
  location: "";
  category: "";
  priority: "";
  id: "";
};
export type SortedCategory = {
  category: Events[];
};

export type EventsContextType = {
  events: Events[];
  setEvents: React.Dispatch<React.SetStateAction<Events[]>>;
};

export type ProviderProp = {
  children: React.ReactNode;
};
export type EventDetailsContextType = {
  eventDetails: Events[];
  setEventDetails: React.Dispatch<React.SetStateAction<Events[]>>;
};

export type SortByCategoryType = {
  sortByCategory: Events[];
  setSortByCategory: React.Dispatch<React.SetStateAction<Events[]>>;
};
