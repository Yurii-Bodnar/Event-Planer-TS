import {
  useIsMobile,
  useIsTabletOrDesktop,
} from "../../hooks/mediaQuery";
import arrowDown from "../../images/icons/chevron-down-small.svg";
import Logo from "../Logo/Logo";
import SearchByKeyword from "../SearchByKeyword/SearchByKeyword";
import {
  Box,
  ButtonLang,
  ButtonLangIcon,
  HeaderTeg,
  Wrapper,
} from "./Header.styled";

const Header: React.FC = () => {
  const isTabletOrDesktop = useIsTabletOrDesktop();
  const isMobile = useIsMobile();
  return (
    <HeaderTeg>
      <Box>
        <Logo />
        <Wrapper>
          {isTabletOrDesktop && <SearchByKeyword />}
          <ButtonLang>
            EN
            <ButtonLangIcon>
              <use href={arrowDown + "#chevron-down"}></use>
            </ButtonLangIcon>
          </ButtonLang>
        </Wrapper>
      </Box>
      {isMobile && <SearchByKeyword />}
    </HeaderTeg>
  );
};

export default Header;
