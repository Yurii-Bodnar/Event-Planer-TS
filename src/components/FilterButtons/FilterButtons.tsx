import iconFilterByCategory from "../../images/icons/filter-by-category.svg";
import iconSort from "../../images/icons/sort.svg";
import iconPlus from "../../images/icons/plus.svg";
import {
  Box,
  BoxForFilter,
  BoxForSort,
  Container,
  IconFilter,
  IconPlus,
  IconSort,
  Link,
  TextBtn,
} from "./FilterButtons.styled";
import { useIsTabletOrDesktop } from "../../hooks/mediaQuery";
import { useContext, useEffect, useState } from "react";
import Categories from "./Categories";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { EventsContext, SortByCategory } from "../../utility/context";

const FilterButtons: React.FC = () => {
  const isTabletOrDesktop = useIsTabletOrDesktop();
  const [showCategory, setShowCategory] = useState<boolean>(false);
  const [categoryName, setCategoryName] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams]: [URLSearchParams, Function] =
    useSearchParams();
  const { sortByCategory, setSortByCategory } = useContext(SortByCategory);
  const { events } = useContext(EventsContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(location.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showCategoryHandler = () =>
    showCategory ? setShowCategory(false) : setShowCategory(true);

  const chooseCategoryHandler = (e: React.ChangeEvent<HTMLLabelElement>) => {
    let params = { key: (e.target as HTMLElement).textContent };
    const chosenCategoryList = events.filter((el) => {
      if (el.category === (e.target as HTMLElement).textContent) {
        return el;
      }
      return null;
    });
    const { textContent } = e.target;
    if (textContent) {
      setCategoryName(textContent);
    }

    if (chosenCategoryList.length === 0) {
      return alert("This list does not contain such a category");
    }
    setSearchParams(params);
  };

  useEffect(() => {
    if (categoryName) {
      const chosenCategoryList = events.filter((el) => {
        if (el.category === categoryName) {
          return el;
        }
        return null;
      });
      setSortByCategory([...chosenCategoryList]);
    } else {
      setSortByCategory([]);
    }
  }, [categoryName, events, setSortByCategory]);
  useEffect(() => {
    if (categoryName) {
      localStorage.setItem("category-sorted", JSON.stringify(sortByCategory));
    } else {
      localStorage.setItem("category-sorted", "[]");
    }
  }, [categoryName, sortByCategory]);

  return (
    <Container>
      <Box>
        <BoxForFilter $showCategory onClick={showCategoryHandler}>
          {isTabletOrDesktop && (
            <TextBtn $categoryName={categoryName}>
              {categoryName ? categoryName : "Category"}
            </TextBtn>
          )}

          <IconFilter $categoryName={categoryName}>
            <use href={iconFilterByCategory + "#filter-by-category"}></use>
          </IconFilter>
          {showCategory && (
            <>
              <Categories
                chooseCategoryHandler={chooseCategoryHandler}
                categoryName={categoryName}
                // searchParams={searchParams}
              />
            </>
          )}
        </BoxForFilter>

        <BoxForSort>
          {isTabletOrDesktop && (
            <TextBtn $categoryName={categoryName}>Sort by</TextBtn>
          )}
          <IconSort>
            <use href={iconSort + "#sort"}></use>
          </IconSort>
        </BoxForSort>
        <Link to={"/form"}>
          {isTabletOrDesktop && "Add new event"}
          <IconPlus>
            <use href={iconPlus + "#plus"}></use>
          </IconPlus>
        </Link>
      </Box>
      {isTabletOrDesktop && <h1>My events</h1>}
    </Container>
  );
};

export default FilterButtons;
