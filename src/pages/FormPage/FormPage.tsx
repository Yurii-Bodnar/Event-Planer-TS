import FormComponent from "../../components/FormComponent/FormComponent";
import { Container, IconBack, Link, Title } from "./FormPage.styled";
import btnBack from "../../images/icons/arrow-left.svg";
import { useContext, useState } from "react";
import { EventsContext } from "../../utility/context";

const FormPage: React.FC = () => {
  const [categoryName, setCategoryName] = useState("");
  const [choseCategory, setChoseCategory] = useState(false);
  const [value, onChange] = useState("");
  // const [valueTime, onChangeTime] = useState("10:00");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [calendarValue, setCalendarValue] = useState("");
  const { events, setEvents } = useContext(EventsContext);
  const handleOpen = (): void =>
    choseCategory ? setChoseCategory(false) : setChoseCategory(true);
  const handleClick = (e: any): void => {
    setCategoryName(e.target.textContent);
    setChoseCategory(false);
  };
  const handleCalendar = () =>
    isCalendarOpen ? setIsCalendarOpen(false) : setIsCalendarOpen(true);

  return (
    <Container>
      <Link to={"/"}>
        <IconBack>
          <use href={btnBack + "#arrow-left"}></use>
        </IconBack>
        Back
      </Link>
      <Title>Create new event</Title>
      <FormComponent
        categoryName={categoryName}
        choseCategory={choseCategory}
        events={events}
        setEvents={setEvents}
        handleClick={handleClick}
        handleOpen={handleOpen}
        setCategoryName={setCategoryName}
        setChoseCategory={setChoseCategory}
        value={value}
        onChange={onChange}
        isCalendarOpen={isCalendarOpen}
        handleCalendar={handleCalendar}
        calendarValue={calendarValue}
        setCalendarValue={setCalendarValue}
        // valueTime={valueTime}
        // onChangeTime={onChangeTime}
        setIsCalendarOpen={setIsCalendarOpen}
      />
    </Container>
  );
};

export default FormPage;
