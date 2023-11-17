import { Suspense, useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { EventDetails, EventsContext } from "../../utility/context";

const Layout: React.FC = () => {
  const { setEvents } = useContext(EventsContext);
  const { setEventDetails } = useContext(EventDetails);

  useEffect(() => {
    const events: string | null = localStorage.getItem("events");
    if (events) setEvents(JSON.parse(events));
  }, [setEvents]);

  useEffect(() => {
    const event: string | null = localStorage.getItem("event");
    if (event) setEventDetails(JSON.parse(event));
  }, [setEventDetails]);

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Header />
      <Outlet />
    </Suspense>
  );
};

export default Layout;
