import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1100px;
  margin: 100px;
`;

export const HeadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-top: 2px solid gray;
  border-bottom: 2px solid gray;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-bottom: 1px solid gray;

  :hover {
    color: blue;
  }
`;

//Head

export const HeadID = styled.div`
  font-size: 20px;
  font-weight: bold;
  width: 20%;
  text-align: center;
`;

export const HeadBasic = styled.div`
  font-size: 20px;
  font-weight: bold;
  width: 20%;
  text-align: center;
`;

export const HeadTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  width: 50%;
  text-align: center;
`;

//Body
export const ID = styled.div`
  font-size: 15px;
  color: gray;
  width: 20%;
  text-align: center;
`;

export const Basic = styled.div`
  font-size: 13px;
  width: 20%;
  text-align: center;
`;

export const Title = styled.div`
  font-size: 15px;
  font-weight: bold;
  width: 50%;
  text-align: center;
  cursor: pointer;
`;

//버튼
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 23px;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 180px;
  height: 50px;
  background-color: white;
  border-radius: 12px;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  :hover {
    background-color: #f5f2fc;
  }
`;

export const PencilIcon = styled.img``;
