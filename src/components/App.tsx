import { Suspense, lazy } from "react";
import {
  EventDetailsProvider,
  EventsContextProvider,
  SortByCategoryProvider,
} from "../utility/context";
import { Navigate, Route, Routes } from "react-router-dom";

const Layout = lazy(() => import("./Layout/Layout"));
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const FormPage = lazy(() => import("../pages/FormPage/FormPage"));
const DetailsPage = lazy(() => import("../pages/DetailsPage/DetailsPage"));

const App: React.FC = () => {
  //   useEffect(() => {
  //     if (localStorage.getItem("events"))
  //       setEvents(JSON.parse(localStorage.getItem("events")));
  //   }, []);
  //   useEffect(() => {
  //     if (localStorage.getItem("event"))
  //       setEventDetails(JSON.parse(localStorage.getItem("event")));
  //   }, []);

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <EventsContextProvider>
        <EventDetailsProvider>
          <SortByCategoryProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/form" element={<FormPage />} />
                <Route path="/details" element={<DetailsPage />} />
              </Route>
              <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
          </SortByCategoryProvider>
        </EventDetailsProvider>
      </EventsContextProvider>
    </Suspense>
  );
};

export default App;
