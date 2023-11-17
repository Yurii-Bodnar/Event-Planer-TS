import { styled } from "styled-components";

export const Box = styled.div`
  position: relative;
  margin-top: 24px;
  display: flex;
  @media screen and (min-width: 768px) {
    margin-top: 0;
    width: 368px;
  }
  @media screen and (min-width: 1280px) {
    width: 410px;
  }
`;
export const Input = styled.input`
  width: 100%;
  border: none;
  border-radius: 8px;
  background: #fff;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  outline: none;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 100%;
  padding: 17px 0px 17px 48px;

  &::placeholder {
    color: #888;
    /* width: 139px; */
  }
`;
export const IconSvg = styled.svg`
  position: absolute;
  top: 16px;
  left: 12px;
  width: 24px;
  height: 24px;
`;
