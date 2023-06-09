import styled from "@emotion/styled";
import { Button } from "antd";

//Wrapper
export const Wrapper = styled.div`
  border: 1px solid black;
  width: 600px;
  height: 600px;
  //정렬
  display: flex;
  flex-direction: column;
  align-items: center;
  //여백
  margin-top: 50px;
  //여백
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 40px;
  padding-right: 40px;
  //그림자넣기
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 23px;
  border-bottom: 2px solid pink;
`;

export const Inform = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;

export const Body = styled.div`
  width: 100%;
  height: 430px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding-bottom: 20px;
`;

//글자
export const Vector = styled.img`
  margin-right: 15px;
`;

export const Name = styled.div`
  font-size: 20px;
  font-weight: 550;
  padding-bottom: 5px;
`;

export const Date = styled.div`
  font-size: 17px;
  padding-left: 4px;
  color: pink;
`;

export const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Contents = styled.div`
  font-size: 17px;
  padding-left: 4px;
`;

export const AddressWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Address = styled.div`
  font-size: 12px;
  color: gray;
`;

export const ButtonWrapper = styled.div`
  width: 460px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`;

export const Button3 = styled(Button)`
  width: 130px;
  height: 40px;
  &:hover {
    color: #ff5c77 !important;
    border-color: #ff5c77 !important;
  }
`;
