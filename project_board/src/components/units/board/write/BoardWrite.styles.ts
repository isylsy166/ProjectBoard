import styled from "@emotion/styled";
import { Button, Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode/lib/DaumPostcodeEmbed";

// 감싸는애들
export const Page = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  border: 1px solid black;
  width: 600px;
  //정렬
  display: flex;
  flex-direction: column;
  align-items: center;
  //여백
  margin-top: 50px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 40px;
  padding-right: 40px;
  //그림자넣기
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const SubWrapperRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
  justify-content: space-between;
  padding-left: 5px;
  padding-right: 5px;
`;

export const SubWrapperColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  padding-left: 5px;
  padding-right: 10px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  padding-left: 5px;
  padding-right: 10px;
`;

export const InputWrapper2 = styled.div`
  width: 100%;
  padding-left: 5px;
`;

export const InputWrapper3 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-left: 5px;
`;

export const AddressWrapper = styled.div`
  width: 100%;
  height: 78px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 10px;
`;

export const AddImageWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  padding-right: 7px;
`;

export const SubmitWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 7px;
`;

// 글씨이런거
export const Title = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 36px;
  font-weight: bold;
  padding-bottom: 20px;
`;

export const Text = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: bold;
  padding-top: 5px;
  padding-bottom: 10px;
`;

export const Text2 = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: bold;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const Writer = styled.input`
  height: 30px;
  width: 98%;
`;

export const Content = styled.textarea`
  height: 200px;
  width: 98%;
`;

export const AddressWriter = styled.input`
  height: 30px;
  width: 50px;
  margin-right: 10px;
`;

export const AddressButton = styled.button`
  height: 35px;
  width: 100px;
  background-color: black;
  color: white;
  margin-left: 10px;
  cursor: pointer;
`;

export const AddImage = styled.button`
  height: 100px;
  width: 100px;
  background-color: lightgray;
  color: black;
  border: 0px;
  margin-left: 10px;
  font-size: 15px;
  cursor: pointer;
`;

export const RadioButton = styled.input`
  cursor: pointer;
`;

export const ButtonSB = styled(Button)`
  width: 150px;
  height: 45px;
`;

export const SearchAddressButton = styled(Button)`
  color: white;
  background-color: black;
`;

export const AddressModal = styled(Modal)``;

export const AddressSearchInput = styled(DaumPostcodeEmbed)``;

export const Address = styled.input`
  height: 30px;
  width: 98%;
`;

export const Error = styled.div`
  padding-top: 10px;
  font-size: 10px;
  color: red;
`;
