import searchIcon from "../../images/icons/search.svg";
import { Box, IconSvg, Input } from "./SearchByKeyword.styled";

const SearchByKeyword: React.FC = () => {
  return (
    <Box>
      <Input type="text" placeholder="Search by keywords" />
      <IconSvg>
        <use href={searchIcon + "#search"}></use>
      </IconSvg>
    </Box>
  );
};

export default SearchByKeyword;
