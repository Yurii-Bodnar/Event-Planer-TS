import { styled } from "styled-components";

export const Form = styled.form`
  position: relative;
  border-radius: 8px;
  background: #fff;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  margin-top: 24px;
  padding: 40px 16px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    padding: 40px 24px;
  }
  @media screen and (min-width: 1280px) {
    padding: 40px 40px 54px 40px;
  }
`;
export const Div = styled.div`
  display: grid;

  @media screen and (min-width: 768px) {
    grid-gap: 24px;
    grid-template-columns: repeat(2, auto);
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
  @media screen and (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(2, auto);
  }
`;
export const BoxForDesktop = styled.div`
  display: grid;
  grid-gap: 20px;
`;
export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Label = styled.label`
  color: #7b61ff;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.4px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
`;
export const Input = styled.input`
  border-radius: 8px;
  border: 1px solid #aca7c3;
  padding: 16px 0 16px 12px;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  outline: none;
  text-align: start;
  background-color: transparent;
  &::placeholder {
    color: #3f3f3f;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
`;
export const InputError = styled.input`
  border-radius: 8px;
  border: 1px solid #ff2b77;
  padding: 16px 0 16px 12px;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  outline: none;
  background-color: transparent;
  &::placeholder {
    color: #3f3f3f;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
`;
export const LabelDisabled = styled.label`
  color: #aca7c3;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.4px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
`;
export const InputDisabled = styled.input`
  border-radius: 8px;
  border: 1px solid #aca7c3;
  padding: 16px 0 16px 12px;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  outline: none;
  text-align: start;
  background-color: transparent;
  &::placeholder {
    color: #aca7c3;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
`;
export const DeleteBtn = styled.button`
  position: absolute;
  top: 41px;
  right: 12px;
`;
export const IconDeleteDisabled = styled.svg`
  width: 24px;
  height: 24px;
`;
export const IconDelete = styled.svg`
  width: 24px;
  height: 24px;
  fill: #7b61ff;
`;
export const IconSelect = styled.svg`
  width: 24px;
  height: 24px;
  fill: transparent;
`;
export const Placeholder = styled.span`
  color: #3f3f3f;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  position: absolute;
  bottom: 17px;
  left: 12px;
  @media screen and (min-width: 768px) {
    top: 41px;
    left: 12px;
  }
`;
export const InputDescription = styled.input`
  border-radius: 8px;
  border: 1px solid #aca7c3;
  padding: 16px 0 116px 12px;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  outline: none;

  &::placeholder {
    color: #3f3f3f;
    color: #3f3f3f;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
`;
export const InputDescriptionError = styled.input`
  border-radius: 8px;
  border: 1px solid #ff2b77;
  padding: 16px 0 116px 12px;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  outline: none;
  &::placeholder {
    color: #3f3f3f;
    color: #3f3f3f;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
`;
export const ContainerCalendar = styled.div`
  position: absolute;

  /* right: 0px;
  top: 82px; */
  right: 16px;
  top: 427px;
  z-index: 1;
  @media screen and (min-width: 768px) {
    left: 20px;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: center;
    right: 184px;
    top: 124px;
  }

  .react-calendar * {
    text-decoration: none;
  }
  .react-calendar {
    width: 240px;
    height: 348px;
    padding: 20px;
    border: none;

    border-radius: 11px;
    background: #fff;
    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.07);
    @media screen and (min-width: 768px) {
      width: 308px;
      height: 348px;
    }
    @media screen and (min-width: 1280px) {
      width: 372px;
      height: 348px;
    }
  }
  .react-calendar__navigation button {
    min-width: 20px;
    height: 20px;
  }
  .react-calendar__navigation__label__labelText {
    color: #3f3f3f;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }
  .react-calendar__navigation {
    height: auto;
    margin-bottom: 16px;
  }
  .react-calendar__month-view__weekdays__weekday {
    padding: 8px 2px;
  }
  .abbr[title] {
    text-decoration: none;
  }
  .react-calendar__month-view__weekdays {
    color: #3f3f3f;
    text-align: center;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    text-transform: none;
    margin-bottom: 16px;
  }
  .react-calendar__month-view__weekdays__weekday--weekend {
    color: red;
  }
  .react-calendar__tile {
    padding: 8px;
    color: #aca7c3;
    text-align: center;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }
  .react-calendar__tile--now {
    background-color: transparent;
    color: #7b61ff;
  }
  .react-calendar__tile--active {
    background: #7b61ff;
    color: #fff;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #7b61ff;
  }
`;
export const BoxBtnForCalendar = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  z-index: 20;
  display: flex;
  gap: 16px;
  @media screen and (min-width: 768px) {
    left: 86px;
  }
  @media screen and (min-width: 1280px) {
    left: 420px;
  }
`;
export const BtnForCalendarChooseDate = styled.button`
  border-radius: 4px;
  background: #7b61ff;
  padding: 8px 16px;
  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
`;
export const BtnFroCalendarCancel = styled.button`
  border-radius: 4px;
  border: 1px solid var(--accent, #7b61ff);
  padding: 8px 16px;
  color: #7b61ff;
  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
`;
export const BoxForBtn = styled.div`
  display: flex;
  justify-content: end;
`;
export const BtnSubmit = styled.button`
  color: #fff;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 16px 12px;
  border-radius: 8px;
  background: #7b61ff;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  width: 100%;
  @media screen and (min-width: 768px) {
    margin-top: 40px;
    width: 193px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 60px;
  }
`;

export const ComboBox = styled.div`
  position: absolute;
  z-index: 10;
  bottom: 57px;
  width: 158px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  @media screen and (min-width: 768px) {
    bottom: 158px;
  }
  @media screen and (min-width: 1280px) {
    bottom: 92px;
  }
`;
export const ComboBoxSection = styled.div`
  padding: 8px 24px;
  border-bottom: 1px solid #aca7c3;
  background: #fff;
  padding: 8px 0;
`;
export const Span = styled.span`
  padding-left: 24px;
  color: #aca7c3;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`;
export const ComboBoxSectionLast = styled.div`
  border-radius: 0px 0px 8px 8px;
  border-bottom: 1px solid #aca7c3;
  padding: 8px 24px;
  background: #fff;
  padding: 8px 0;
`;
export const ErrorsBox = styled.div`
  position: absolute;
  position: absolute;
  top: 83px;
  right: 19px;
`;
export const ErrorsText = styled.p`
  color: #ff2b77;
  text-align: right;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`;

export const ErrorsBoxDescription = styled.div`
  position: absolute;
  position: absolute;
  right: 19px;
  top: 183px;
`;
