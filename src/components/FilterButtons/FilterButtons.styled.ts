import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
export interface IPropBoxForFilter {
  showCategory: Boolean;
}
export interface IPropCategoryName {
  categoryName: string;
}
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: 1280px) {
    justify-content: space-between;
    flex-direction: row-reverse;
    align-items: end;
  }
`;
export const Box = styled.div`
  display: flex;
  gap: 24px;
  justify-content: end;
  align-items: center;
`;
export const BoxForFilter = styled.div<IPropBoxForFilter>`
  position: relative;
  padding: 16px;
  cursor: pointer;
  border-radius: ${({ showCategory }) =>
    showCategory ? "8px 8px 0px 0px" : !showCategory && "8px"};
  background: #fff;
  width: 24px;
  height: 24px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  @media screen and (min-width: 768px) {
    width: 158px;
    display: flex;
    align-items: center;
    gap: 16px;
    color: #3f3f3f;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 16px 0px;
    justify-content: center;
  }
`;
export const BoxForFilterMob = styled.div`
  width: 158px;
  display: flex;
  align-items: center;
  gap: 16px;
  color: #3f3f3f;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 16px 0px;
  justify-content: center;
  border-radius: 8px 8px 0px 0px;
  border-bottom: 1px solid #aca7c3;
  background: #fff;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
`;
export const ComboBox = styled.div`
  position: absolute;
  z-index: 10;
  top: 57px;
  width: 158px;
  left: 0;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
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
export const ChosenSpan = styled.span`
  padding-left: 24px;
  color: #7b61ff;
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
export const IconFilter = styled.svg<IPropCategoryName>`
  width: 24px;
  height: 24px;

  fill: ${({ categoryName }) =>
    categoryName ? "#7b61ff" : !categoryName && "#3f3f3f"};
`;
export const TextBtn = styled.span<IPropCategoryName>`
  color: ${({ categoryName }) =>
    categoryName ? "#7b61ff" : !categoryName && "#3f3f3f"};
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const BoxForSort = styled.div`
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  background: #fff;
  width: 24px;
  height: 24px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  @media screen and (min-width: 768px) {
    width: 129px;
    display: flex;
    align-items: center;
    gap: 16px;
    color: #3f3f3f;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 16px 0px;
    justify-content: center;
  }
`;
export const IconSort = styled.svg`
  width: 24px;
  height: 24px;
`;
export const Link = styled(NavLink)`
  padding: 16px;
  border-radius: 8px;
  background: #7b61ff;
  width: 24px;
  height: 24px;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media screen and (min-width: 768px) {
    width: 193px;
    display: flex;
    align-items: center;
    gap: 16px;
    color: #fff;
    padding: 12px 0px;
    justify-content: center;
  }
`;
export const IconPlus = styled.svg`
  width: 24px;
  height: 24px;
  fill: #fff;
`;
export const Title = styled.h1``;
