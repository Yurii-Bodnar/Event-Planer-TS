import {
  Box,
  Btn,
  Container,
  Div,
  Image,
  Item,
  TextCategory,
  TextDataLocation,
  TextDescription,
  TextPriority,
  Title,
  Wrapper,
  WrapperBtn,
} from "./EventItem.styled";
import eventImage from "../../images/images.jpg";
import { getCorrectStrLength } from "../../utility/helpers";
import { IPropsEventItem } from "../../types/interfaces";

const EventItem: React.FC<IPropsEventItem> = (props) => {
  const { events, handleClick, sortByCategory } = props;

  return (
    <>
      {sortByCategory.length > 0
        ? sortByCategory?.map(
            ({
              title,
              description,
              date,
              time,
              category,
              priority,
              location,
              id,
            }) => (
              <Item key={id}>
                <Box>
                  <TextCategory>{category}</TextCategory>
                  <TextPriority>{priority}</TextPriority>
                </Box>
                <Div>
                  {" "}
                  <Image src={eventImage} alt="content" />
                  <Wrapper>
                    <TextDataLocation>{date + " at " + time}</TextDataLocation>
                    <TextDataLocation>{location}</TextDataLocation>
                  </Wrapper>
                </Div>

                <Container>
                  <Title>{title}</Title>
                  <TextDescription>
                    {description.length > 100
                      ? getCorrectStrLength(description) + "..."
                      : description}
                  </TextDescription>
                  <WrapperBtn>
                    <Btn type="button" id={id} onClick={(e) => handleClick(e)}>
                      More info
                    </Btn>
                  </WrapperBtn>
                </Container>
              </Item>
            )
          )
        : events.map(
            ({
              title,
              description,
              date,
              time,
              category,
              priority,
              location,
              id,
            }) => (
              <Item key={id}>
                <Box>
                  <TextCategory>{category}</TextCategory>
                  <TextPriority>{priority}</TextPriority>
                </Box>
                <Div>
                  {" "}
                  <Image src={eventImage} alt="content" />
                  <Wrapper>
                    <TextDataLocation>{date + " at " + time}</TextDataLocation>
                    <TextDataLocation>{location}</TextDataLocation>
                  </Wrapper>
                </Div>

                <Container>
                  <Title>{title}</Title>
                  <TextDescription>
                    {description.length > 100
                      ? getCorrectStrLength(description) + "..."
                      : description}
                  </TextDescription>
                  <WrapperBtn>
                    <Btn
                      type="button"
                      id={id}
                      onClick={(event: any) => handleClick(event)}
                    >
                      More info
                    </Btn>
                  </WrapperBtn>
                </Container>
              </Item>
            )
          )}
    </>
  );
};

export default EventItem;
