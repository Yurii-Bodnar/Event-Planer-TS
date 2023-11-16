import { Events } from "./events";

export interface IPropsFormComponent {
  categoryName: string;
  choseCategory: boolean;
  events: Events[];
  setEvents: React.Dispatch<React.SetStateAction<Events[]>>;
  handleOpen: () => void;
  handleClick: (e: any) => void;
  setCategoryName: React.Dispatch<React.SetStateAction<string>>;
  setChoseCategory: React.Dispatch<React.SetStateAction<boolean>>;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  isCalendarOpen: boolean;
  handleCalendar: () => void;
  calendarValue: string;
  setCalendarValue: React.Dispatch<React.SetStateAction<string>>;
  setIsCalendarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  //   valueTime: string;
  //   onChangeTime: React.Dispatch<React.SetStateAction<string>>;
}
export interface IPropsForCategoriesBox {
  handleClick: (e: any) => void;
}
export interface IPropsCalendarComponent {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  handleCalendar: () => void;
  setCalendarValue: React.Dispatch<React.SetStateAction<string>>;
  setIsCalendarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface IPropsCategories {
  chooseCategoryHandler: (e: any) => void | string;
  categoryName: string;
  //   searchParams: [URLSearchParams, Function];
}
export interface IPropsEventItem {
  events: Events[];
  handleClick: (e: any) => void;
  sortByCategory: Events[];
}
export interface IFormikValues {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  priority: string;
  id: string;
}
