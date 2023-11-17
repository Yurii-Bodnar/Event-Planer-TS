import { styled } from "styled-components";
export const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h2`
  color: #3f3f3f;
  font-family: "Poppins";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 24px;
  width: 272px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    width: 688px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 17px;
  }
`;
export const Container = styled.div`
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  margin-top: 24px;
  width: 272px;
  @media screen and (min-width: 768px) {
    width: 688px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 14px;
  }
`;
export const Image = styled.img`
  width: 272px;
  height: 168px;
  flex-shrink: 0;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    width: 688px;
    height: 272px;
  }
`;
export const TextDescription = styled.article`
  color: #49454f;
  font-family: "Poppins";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;
export const Box = styled.div`
  padding: 24px 16px 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: 1280px) {
    padding: 20px 16px 0 10px;
    gap: 12px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const TextCategoryAndLocation = styled.p`
  padding: 6px 12px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 4px 5px 9px 0px rgba(166, 141, 174, 0.28);

  color: #7b61ff;
  text-align: center;
  font-family: "Poppins";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
export const TextPriority = styled.p`
  border-radius: 8px;
  background: #fff;
  box-shadow: 4px 5px 9px 0px rgba(166, 141, 174, 0.28);
  padding: 8px 12px;
  color: #ff2b77;
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
export const Div = styled.div`
  padding-left: 16px;
  margin-top: 12px;
`;
export const TextDate = styled.p`
  padding: 6px 0px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 4px 5px 9px 0px rgba(166, 141, 174, 0.28);
  color: #7b61ff;
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  width: 139px;
`;
export const WrapperForBtn = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 40px;
  padding: 0 0 40px 16px;
  @media screen and (min-width: 768px) {
    justify-content: end;
    padding: 0 24px 40px 0;
    gap: 16px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 24px;
  }
`;
export const BtnEdit = styled.button`
  padding: 8px 0;
  width: 108px;
  border-radius: 4px;
  border: 1px solid #7b61ff;
  color: #7b61ff;
  text-align: center;
  font-family: "Poppins";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  @media screen and (min-width: 768px) {
    width: 55px;
  }
`;
export const BtnDelete = styled.button`
  padding: 8px 0;
  width: 108px;
  border-radius: 4px;
  color: #fff;
  background: #7b61ff;
  text-align: center;
  font-family: "Poppins";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
`;
