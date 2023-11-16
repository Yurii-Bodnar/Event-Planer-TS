import { styled } from "styled-components";
import bg from "../../images/Group.png";

export const Container = styled.section`
  background: url(${bg}) no-repeat;
  background-size: 100% 100%;

  padding: 40px 24px 136px;
  display: grid;
  @media screen and (min-width: 768px) {
    padding: 40px 40px 308px 40px;
  }
  @media screen and (min-width: 1280px) {
    padding: 18px 80px 300px 80px;
  }
`;
