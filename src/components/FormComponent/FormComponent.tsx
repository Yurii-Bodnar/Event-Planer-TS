import { useFormik } from "formik";
import { useIsDesktop, useIsMobile, useIsTablet } from "../../hooks/mediaQuery";

import {
  Box,
  BoxForBtn,
  BtnSubmit,
  Form,
  Input,
  InputDescription,
  Label,
  Wrapper,
  Div,
  Placeholder,
  ErrorsBox,
  ErrorsText,
  ErrorsBoxDescription,
  InputError,
  InputDescriptionError,
  DeleteBtn,
  IconDelete,
  IconSelect,
  BoxForDesktop,
  LabelDisabled,
  InputDisabled,
  IconDeleteDisabled,
} from "./FormComponent.styled";
import { v4 as uuidv4 } from "uuid";
import CategoriesBox from "./CategoriesBox";
import { validation } from "../../utility/validation";
import iconDelete from "../../images/icons/close-btn.svg";
import iconDeleteError from "../../images/icons/close-error-btn.svg";
import iconSelect from "../../images/icons/chevron-down-small.svg";
import iconSelectError from "../../images/icons/chevronError-down.svg";
import iconSelectUp from "../../images/icons/chevron-up-small.svg";
import iconSelectErrorUp from "../../images/icons/chevron-error-up.svg";
import iconDeleteDisabled from "../../images/icons/close-btn-disabled.svg";
import CalendarComponent from "./CalendarComponent";
import { IFormikValues, IPropsFormComponent } from "../../types/interfaces";

const FormComponent: React.FC<IPropsFormComponent> = (props) => {
  const {
    categoryName,
    choseCategory,
    events,
    handleClick,
    handleOpen,
    setCategoryName,
    setChoseCategory,
    // setEvents,
    calendarValue,
    handleCalendar,
    isCalendarOpen,
    onChange,
    setCalendarValue,
    setIsCalendarOpen,
    value,
    // valueTime,
    // onChangeTime,
  } = props;

  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isDesktop = useIsDesktop();

  const initialValues: IFormikValues = {
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    category: "",
    priority: "",
    id: "",
  };
  const formik = useFormik({
    initialValues,
    validate: validation,
    onSubmit: (values) => {
      const dataEvent = {
        title: values.title,
        description: values.description,
        date: calendarValue,
        time: values.time,
        location: values.location,
        category: categoryName,
        priority: values.priority,
        id: uuidv4(),
      };

      if (categoryName && calendarValue) {
        // setEvents([...events, dataEvent]);
        localStorage.setItem("events", JSON.stringify([...events, dataEvent]));
        setCategoryName("");
        setCalendarValue("");
        formik.resetForm();
      }
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Div>
        <Wrapper>
          {" "}
          <BoxForDesktop>
            <Label>
              Title
              {formik.errors.title && formik.touched.title ? (
                <>
                  {" "}
                  <InputError
                    type="text"
                    placeholder="Input"
                    id="title"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.title}
                  />
                  <DeleteBtn
                    type="button"
                    onClick={() => formik.setFieldValue("title", "")}
                  >
                    <IconDelete>
                      <use href={iconDeleteError + "#close-error-btn"}></use>
                    </IconDelete>
                  </DeleteBtn>
                </>
              ) : (
                <>
                  <Input
                    type="text"
                    placeholder="Input"
                    id="title"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.title}
                    name="title"
                  />

                  <DeleteBtn
                    type="reset"
                    onClick={() => formik.setFieldValue("title", "")}
                  >
                    <IconDelete>
                      <use href={iconDelete + "#close-btn"}></use>
                    </IconDelete>
                  </DeleteBtn>
                </>
              )}
              {formik.errors.title && formik.touched.title ? (
                <ErrorsBox>
                  <ErrorsText>{formik.errors.title}</ErrorsText>
                </ErrorsBox>
              ) : null}
            </Label>
            <Label>
              Description
              {formik.errors.description && formik.touched.description ? (
                <>
                  <InputDescriptionError
                    type="text"
                    placeholder="Input"
                    id="description"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.description}
                  />
                  <DeleteBtn
                    type="button"
                    onClick={() => formik.setFieldValue("description", "")}
                  >
                    <IconDelete>
                      <use href={iconDeleteError + "#close-error-btn"}></use>
                    </IconDelete>
                  </DeleteBtn>
                </>
              ) : (
                <>
                  {" "}
                  <InputDescription
                    type="text"
                    placeholder="Input"
                    id="description"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.description}
                  />
                  <DeleteBtn
                    type="button"
                    onClick={() => formik.setFieldValue("description", "")}
                  >
                    <IconDelete>
                      <use href={iconDelete + "#close-btn"}></use>
                    </IconDelete>
                  </DeleteBtn>
                </>
              )}
              {formik.errors.description && formik.touched.description ? (
                <ErrorsBoxDescription>
                  <ErrorsText>{formik.errors.description}</ErrorsText>
                </ErrorsBoxDescription>
              ) : null}
            </Label>
          </BoxForDesktop>
          <BoxForDesktop>
            <Label>
              Select date
              {!calendarValue && formik.touched.date ? (
                <>
                  <InputError
                    type="button"
                    id="date"
                    onClick={handleCalendar}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={calendarValue}
                  />
                  {!isCalendarOpen ? (
                    <DeleteBtn type="button">
                      <IconSelect>
                        <use
                          href={iconSelectError + "#chevron-error-down"}
                        ></use>
                      </IconSelect>
                    </DeleteBtn>
                  ) : (
                    <DeleteBtn type="button" onClick={handleCalendar}>
                      <IconSelect>
                        <use
                          href={iconSelectErrorUp + "#chevron-error-up"}
                        ></use>
                      </IconSelect>
                    </DeleteBtn>
                  )}
                </>
              ) : (
                <>
                  <Input
                    type="button"
                    id="date"
                    onClick={handleCalendar}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={calendarValue}
                  />

                  {calendarValue ? (
                    <DeleteBtn
                      type="button"
                      onClick={() => {
                        formik.setFieldValue("date", "");
                        setCalendarValue("");
                      }}
                    >
                      <IconDelete>
                        <use href={iconDelete + "#close-btn"}></use>
                      </IconDelete>
                    </DeleteBtn>
                  ) : !calendarValue && !isCalendarOpen ? (
                    <DeleteBtn type="button" onClick={handleCalendar}>
                      <IconSelect>
                        <use href={iconSelect + "#chevron-down"}></use>
                      </IconSelect>
                    </DeleteBtn>
                  ) : (
                    !calendarValue &&
                    isCalendarOpen && (
                      <DeleteBtn type="button">
                        <IconSelect>
                          <use href={iconSelectUp + "#chevron-up"}></use>
                        </IconSelect>
                      </DeleteBtn>
                    )
                  )}
                </>
              )}
              {!calendarValue && formik.touched.date ? (
                <ErrorsBox>
                  <ErrorsText>Invalid date</ErrorsText>
                </ErrorsBox>
              ) : null}
              <Placeholder>{calendarValue ? null : "Input"}</Placeholder>
            </Label>
            {isCalendarOpen && (
              <CalendarComponent
                value={value}
                onChange={onChange}
                handleCalendar={handleCalendar}
                setCalendarValue={setCalendarValue}
                setIsCalendarOpen={setIsCalendarOpen}
              />
            )}
            <Label>
              Select time
              {formik.errors.time && formik.touched.time ? (
                <>
                  {" "}
                  <InputError
                    type="time"
                    id="time"
                    placeholder="Input"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.time}
                  />
                  <DeleteBtn type="button">
                    <IconSelect>
                      <use href={iconSelectError + "#chevron-error-down"}></use>
                    </IconSelect>
                  </DeleteBtn>
                </>
              ) : (
                <>
                  {" "}
                  <Input
                    type="time"
                    id="time"
                    placeholder="Input"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.time}
                  />
                  <DeleteBtn
                    type="button"
                    onClick={() => formik.setFieldValue("time", "")}
                  >
                    {formik.values.time ? (
                      <IconDelete>
                        <use href={iconDelete + "#close-btn"}></use>
                      </IconDelete>
                    ) : (
                      <IconSelect>
                        <use href={iconSelect + "#chevron-down"}></use>
                      </IconSelect>
                    )}
                  </DeleteBtn>
                </>
              )}
              {formik.errors.time && formik.touched.time ? (
                <ErrorsBox>
                  <ErrorsText>{formik.errors.time}</ErrorsText>
                </ErrorsBox>
              ) : null}
            </Label>
            {isDesktop && (
              <Label>
                Location
                {formik.errors.location && formik.touched.location ? (
                  <>
                    {" "}
                    <InputError
                      type="text"
                      placeholder="Input"
                      id="location"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.location}
                    />
                    <DeleteBtn
                      type="button"
                      onClick={() => formik.setFieldValue("location", "")}
                    >
                      <IconDelete>
                        <use href={iconDeleteError + "#close-error-btn"}></use>
                      </IconDelete>
                    </DeleteBtn>
                  </>
                ) : (
                  <>
                    {" "}
                    <Input
                      type="text"
                      placeholder="Input"
                      id="location"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.location}
                    />
                    <DeleteBtn
                      type="button"
                      onClick={() => formik.setFieldValue("location", "")}
                    >
                      <IconDelete>
                        <use href={iconDelete + "#close-btn"}></use>
                      </IconDelete>
                    </DeleteBtn>
                  </>
                )}
                {formik.errors.location && formik.touched.location ? (
                  <ErrorsBox>
                    <ErrorsText>{formik.errors.location}</ErrorsText>
                  </ErrorsBox>
                ) : null}
              </Label>
            )}
          </BoxForDesktop>
        </Wrapper>
        <Box>
          {(isTablet || isMobile) && (
            <Label>
              Location
              {formik.errors.location && formik.touched.location ? (
                <>
                  {" "}
                  <InputError
                    type="text"
                    placeholder="Input"
                    id="location"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.location}
                  />
                  <DeleteBtn
                    type="button"
                    onClick={() => formik.setFieldValue("location", "")}
                  >
                    <IconDelete>
                      <use href={iconDeleteError + "#close-error-btn"}></use>
                    </IconDelete>
                  </DeleteBtn>
                </>
              ) : (
                <>
                  {" "}
                  <Input
                    type="text"
                    placeholder="Input"
                    id="location"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.location}
                  />
                  <DeleteBtn
                    type="button"
                    onClick={() => formik.setFieldValue("location", "")}
                  >
                    <IconDelete>
                      <use href={iconDelete + "#close-btn"}></use>
                    </IconDelete>
                  </DeleteBtn>
                </>
              )}
              {formik.errors.location && formik.touched.location ? (
                <ErrorsBox>
                  <ErrorsText>{formik.errors.location}</ErrorsText>
                </ErrorsBox>
              ) : null}
            </Label>
          )}
          <Label>
            Category
            {!categoryName && formik.touched.category ? (
              <>
                <InputError
                  type="button"
                  placeholder="Input"
                  id="category"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  onClick={handleOpen}
                  value={formik.values.category}
                />
                {choseCategory ? (
                  <DeleteBtn type="button" onClick={handleOpen}>
                    <IconSelect>
                      <use href={iconSelectErrorUp + "#chevron-error-up"}></use>
                    </IconSelect>
                  </DeleteBtn>
                ) : (
                  <DeleteBtn type="button" onClick={handleOpen}>
                    <IconSelect>
                      <use href={iconSelectError + "#chevron-error-down"}></use>
                    </IconSelect>
                  </DeleteBtn>
                )}
              </>
            ) : (
              <>
                <Input
                  type="button"
                  id="category"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  onClick={handleOpen}
                  value={categoryName}
                />
                {categoryName ? (
                  <DeleteBtn
                    type="button"
                    onClick={() => {
                      formik.setFieldValue("category", "");
                      setCategoryName("");
                    }}
                  >
                    <IconSelect>
                      <use href={iconDelete + "#close-btn"}></use>
                    </IconSelect>
                  </DeleteBtn>
                ) : !categoryName && !choseCategory ? (
                  <DeleteBtn
                    type="button"
                    onClick={() => setChoseCategory(true)}
                  >
                    <IconSelect>
                      <use href={iconSelect + "#chevron-down"}></use>
                    </IconSelect>
                  </DeleteBtn>
                ) : (
                  !categoryName &&
                  choseCategory && (
                    <DeleteBtn type="button" onClick={handleOpen}>
                      <IconSelect>
                        <use href={iconSelectUp + "#chevron-up"}></use>
                      </IconSelect>
                    </DeleteBtn>
                  )
                )}
              </>
            )}
            {!categoryName && formik.touched.category ? (
              <ErrorsBox>
                <ErrorsText>Invalid category</ErrorsText>
              </ErrorsBox>
            ) : null}
            <Placeholder>{categoryName ? null : "Input"}</Placeholder>
          </Label>
          {choseCategory && <CategoriesBox handleClick={handleClick} />}
          <LabelDisabled>
            Add picture
            <InputDisabled type="text" placeholder="Input" disabled={true} />
            <DeleteBtn type="button">
              <IconDeleteDisabled>
                <use href={iconDeleteDisabled + "#close-disabled-btn"}></use>
              </IconDeleteDisabled>
            </DeleteBtn>
          </LabelDisabled>
          <Label>
            Priority
            {formik.errors.priority && formik.touched.priority ? (
              <>
                {" "}
                <InputError
                  type="text"
                  placeholder="Input"
                  id="priority"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.priority}
                />
                <DeleteBtn
                  type="button"
                  onClick={() => formik.setFieldValue("priority", "")}
                >
                  <IconDelete>
                    <use href={iconDeleteError + "#close-error-btn"}></use>
                  </IconDelete>
                </DeleteBtn>
              </>
            ) : (
              <>
                <Input
                  type="text"
                  placeholder="Input"
                  id="priority"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.priority}
                />
                <DeleteBtn
                  type="button"
                  onClick={() => formik.setFieldValue("priority", "")}
                >
                  <IconDelete>
                    <use href={iconDelete + "#close-btn"}></use>
                  </IconDelete>
                </DeleteBtn>
              </>
            )}
            {formik.errors.priority && formik.touched.priority ? (
              <ErrorsBox>
                <ErrorsText>{formik.errors.priority}</ErrorsText>
              </ErrorsBox>
            ) : null}
          </Label>
        </Box>
      </Div>
      {isDesktop && (
        <BoxForBtn>
          <BtnSubmit type="submit">Add event</BtnSubmit>
        </BoxForBtn>
      )}
      {(isMobile || isTablet) && (
        <BoxForBtn>
          <BtnSubmit type="submit">Add event</BtnSubmit>
        </BoxForBtn>
      )}
    </Form>
  );
};

export default FormComponent;
