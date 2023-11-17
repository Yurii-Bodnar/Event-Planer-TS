import { styled } from "styled-components";

export const HeaderTeg = styled.header`
  padding: 24px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #7b61ff;
  @media screen and (min-width: 768px) {
    padding: 26px 40px 18px;
  }
  @media screen and (min-width: 1280px) {
    padding: 22px 80px;
  }
`;
export const Box = styled.div`
  display: flex;
  gap: 56px;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    gap: 0;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`;

export const ButtonLang = styled.button`
  display: flex;
  align-items: center;
  border-radius: 8px;
  background: #fff;
  padding: 12px 4px 12px 12px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  color: #3f3f3f;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
`;
export const ButtonLangIcon = styled.svg`
  width: 24px;
  height: 24px;
`;
