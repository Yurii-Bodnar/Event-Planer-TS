import { IPropsForCategoriesBox } from "../../types/interfaces";
import {
  ComboBox,
  ComboBoxSection,
  ComboBoxSectionLast,
  Span,
} from "./FormComponent.styled";

const CategoriesBox: React.FC<IPropsForCategoriesBox> = (props) => {
  const { handleClick } = props;
  return (
    <ComboBox onClick={(e) => handleClick(e)}>
      <ComboBoxSection>
        <Span>Art</Span>
      </ComboBoxSection>
      <ComboBoxSection>
        <Span>Music</Span>
      </ComboBoxSection>
      <ComboBoxSection>
        <Span>Business</Span>
      </ComboBoxSection>
      <ComboBoxSection>
        <Span>Conference</Span>
      </ComboBoxSection>
      <ComboBoxSection>
        <Span>Workshop</Span>
      </ComboBoxSection>
      <ComboBoxSection>
        <Span>Party</Span>
      </ComboBoxSection>
      <ComboBoxSectionLast>
        <Span>Sport</Span>
      </ComboBoxSectionLast>
    </ComboBox>
  );
};

export default CategoriesBox;
