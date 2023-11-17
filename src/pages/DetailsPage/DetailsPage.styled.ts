import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import bg from "../../images/Group.png";

export const Container = styled.div`
  padding: 40px 24px 136px;
  background: url(${bg}) no-repeat;
  background-size: 100% 100%;

  @media screen and (min-width: 768px) {
    padding: 40px 40px 308px 40px;
  }
  @media screen and (min-width: 1280px) {
    padding: 18px 80px 300px 80px;
  }
`;
export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #7b61ff;
  font-family: "Poppins";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const IconBack = styled.svg`
  width: 24px;
  height: 24px;
`;
