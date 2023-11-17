import Calendar from "react-calendar";
import {
  BoxBtnForCalendar,
  BtnForCalendarChooseDate,
  BtnFroCalendarCancel,
  ContainerCalendar,
} from "./FormComponent.styled";
import { correctDateCalendar } from "../../utility/helpers";
import { IPropsCalendarComponent } from "../../types/interfaces";
import React, { useState } from "react";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export const CalendarComponent: React.FC<IPropsCalendarComponent> = (props) => {
  const { handleCalendar, setCalendarValue, setIsCalendarOpen } = props;

  const [value, onChange] = useState<Value>(new Date());

  const handlerBtnCancel = () => {
    handleCalendar();
    setCalendarValue("");
  };
  const handlerBtnChooseDate = () => {
    handleCalendar();
    setIsCalendarOpen(false);
    const correctDate = correctDateCalendar(value);
    setCalendarValue(correctDate);
  };

  return (
    <ContainerCalendar>
      <Calendar
        onChange={onChange}
        value={value}
        showNeighboringMonth={false}
        locale="EN"
        calendarType="gregory"
        next2Label={null}
        prev2Label={null}
      />
      <BoxBtnForCalendar>
        <BtnFroCalendarCancel type="button" onClick={handlerBtnCancel}>
          Cancel
        </BtnFroCalendarCancel>
        <BtnForCalendarChooseDate type="button" onClick={handlerBtnChooseDate}>
          Choose date
        </BtnForCalendarChooseDate>
      </BoxBtnForCalendar>
    </ContainerCalendar>
  );
};
