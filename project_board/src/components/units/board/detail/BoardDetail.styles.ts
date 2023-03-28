import styled from "@emotion/styled";

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
  border-bottom: 2px solid #6495ed;
`;

export const Inform = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
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
  color: #6495ed;
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

export const ButtonWrapper = styled.div`
  width: 450px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`;

export const Button = styled.button`
  width: 130px;
  height: 40px;
  padding: 10px 25px;
  border: 2px solid #6495ed;
  color: #6495ed;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  font-size: 15px;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  transition: all 0.3s ease;
  :hover {
    box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
      7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
  }
`;
