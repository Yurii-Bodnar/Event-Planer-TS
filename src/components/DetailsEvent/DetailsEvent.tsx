import { useContext } from "react";
import { EventDetails, EventsContext } from "../../utility/context";
import eventImage from "../../images/images.jpg";
import React from "react";
import {
  Box,
  BtnDelete,
  BtnEdit,
  Container,
  Div,
  Image,
  MainBox,
  TextCategoryAndLocation,
  TextDate,
  TextDescription,
  TextPriority,
  Title,
  Wrapper,
  WrapperForBtn,
} from "./DetailsEvent.styled";
import { useNavigate } from "react-router-dom";
import { useIsMobile, useIsTabletOrDesktop } from "../../hooks/mediaQuery";

const DetailsEvent: React.FC = () => {
  const { eventDetails } = useContext(EventDetails);
  const { events, setEvents } = useContext(EventsContext);
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const isTabletOrDesktop = useIsTabletOrDesktop();

  const handleDelete = () => {
    if (events.length > 0) {
      const res = events.filter((el) => el.id !== eventDetails[0].id);
      if (res.length > 0) {
        setEvents(res);
        localStorage.setItem("events", JSON.stringify(res));
        navigate("/");
      }
    }
  };
  return (
    <MainBox>
      <Title>Gallery Opening</Title>
      {eventDetails?.map(
        ({ description, category, priority, location, date, time, id }) => (
          <Container key={id}>
            <Image src={eventImage} alt="Event" />
            <Box>
              <TextDescription>{description}</TextDescription>
              <Wrapper>
                <TextCategoryAndLocation>{category}</TextCategoryAndLocation>
                <TextPriority>{priority}</TextPriority>
                <TextCategoryAndLocation>{location}</TextCategoryAndLocation>
                {isTabletOrDesktop && (
                  <TextDate>{date + " at " + time}</TextDate>
                )}
              </Wrapper>
            </Box>
            {isMobile && (
              <Div>
                <TextDate>{date + " at " + time}</TextDate>
              </Div>
            )}
            <WrapperForBtn>
              <BtnEdit type="button">Edit</BtnEdit>
              <BtnDelete onClick={handleDelete} type="button">
                Delete event
              </BtnDelete>
            </WrapperForBtn>
          </Container>
        )
      )}
    </MainBox>
  );
};

export default DetailsEvent;
