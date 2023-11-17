import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const Title = styled(NavLink)`
  color: #7b61ff;
  font-family: "Alata";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media screen and (min-width: 768px) {
    margin-right: 80px;
  }
`;