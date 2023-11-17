import { styled } from "styled-components";
export const Box = styled.div`
  display: grid;
  justify-content: center;
`;
export const List = styled.ul`
  display: grid;
  grid-template-columns: 272px;
  justify-content: center;
  grid-row-gap: 24px;
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 332px);
    grid-column-gap: 24px;
    margin-top: 24px;
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(3, 302px);
    grid-column-gap: 24px;
    margin-top: 40px;
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 302px);
    margin-top: 40px;
  }
`;
