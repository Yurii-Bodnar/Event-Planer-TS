import { useContext, useEffect } from "react";
import {
  EventDetails,
  EventsContext,
  SortByCategory,
} from "../../utility/context";
import EventItem from "../EventItem/EventItem";
import { Box, List } from "./EventList.styled";
import { useLocation, useNavigate } from "react-router-dom";
import FilterButtons from "../FilterButtons/FilterButtons";

const EventList: React.FC = () => {
  const { events } = useContext(EventsContext);
  const { sortByCategory } = useContext(SortByCategory);
  const { setEventDetails } = useContext(EventDetails);
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id: string = e.currentTarget.id;
    const event = events.filter((el) => el.id === id);
    navigate("/details");
    setEventDetails(event);
    localStorage.setItem("event", JSON.stringify(event));
  };
  useEffect(() => {
    if (location.pathname !== "details") {
      setEventDetails([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <FilterButtons />
      <List>
        <EventItem
          events={events}
          sortByCategory={sortByCategory}
          handleClick={handleClick}
        />
      </List>
    </Box>
  );
};

export default EventList;
