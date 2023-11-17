import { styled } from "styled-components";

export const WrapperBtn = styled.div`
  display: flex;
  justify-content: end;
`;
export const Btn = styled.button`
  display: none;
  color: #fff;
  text-align: center;
  font-family: "Poppins";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  border-radius: 8px;
  background: #7b61ff;
  padding: 10px 24px;
  transition: 250ms;
`;
export const Div = styled.div`
  position: relative;
`;
export const Image = styled.img`
  width: 271px;
  height: 334px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  transition: 250ms;

  @media screen and (min-width: 768px) {
    width: 332px;
  }
  @media screen and (min-width: 1280px) {
    width: 302px;
  }
`;
export const Wrapper = styled.div`
  position: absolute;
  padding: 8px 16px;
  bottom: 6px;
  display: flex;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.8);
  width: 240px;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
  @media screen and (min-width: 1280px) {
    width: 270px;
  }
`;

export const TextDataLocation = styled.p`
  color: #7b61ff;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;
export const Item = styled.li`
  position: relative;
  border-radius: 12px;
  background: #fff;
  width: 100%;
  height: 480px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  &:hover ${Btn} {
    display: block;
    justify-content: end;
  }
  &:hover ${Image} {
    height: 280px;
  }
`;

export const Box = styled.div`
  position: absolute;
  display: flex;
  gap: 12px;
  top: 12px;
  left: 12px;
  z-index: 1;
`;
export const TextCategory = styled.p`
  color: #7b61ff;
  text-align: center;
  font-family: "Poppins";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  padding: 6px 12px;
  background-color: #fff;
  border-radius: 8px;
`;
export const TextPriority = styled.p`
  color: #ff2b77;
  text-align: center;
  font-family: "Poppins";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  background-color: #fff;
  border-radius: 8px;
  padding: 6px 12px;
`;

export const Container = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Title = styled.h2`
  color: #1c1b1f;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;
export const TextDescription = styled.p`
  color: #49454f;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;
