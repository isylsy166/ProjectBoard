import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 680px;
  //여백
  margin-top: 30px;
  margin-bottom: 10px;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-bottom: 13px;
  border-bottom: 2px solid #6495ed;
`;

export const Icon = styled.img`
  width: 30px;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-left: 8px;
`;

export const InputWrapper = styled.div`
  width: 400px;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Input = styled.input`
  width: 140px;

  color: #6495ed;
  border: 2px solid #6495ed;
`;

export const Button = styled.button`
  width: 90px;
  height: 40px;
  padding: 10px 25px;
  border: 2px solid #6495ed;
  color: #6495ed;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  font-size: 15px;
  background: transparent;
  cursor: pointer;
`;

export const Contents = styled.textarea`
  width: 99%;
  height: 100px;
  resize: none;
  border: 1px solid gray;
  margin-top: 8px;
`;
