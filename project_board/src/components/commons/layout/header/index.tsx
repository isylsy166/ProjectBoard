import styled from "@emotion/styled";
import { Button } from "antd";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const EnjoyWrapper = styled.div`
  width: 220px;
  height: 50px;
  margin-right: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TitleText = styled.text`
  margin-left: 100px;
  font-size: 30px;
  font-weight: bold;
  color: #ff5c77;
  font-family: "SCDream5";
  cursor: pointer;
`;

const ButtonLogin = styled(Button)`
  width: 100px;
  height: 50px;
  font-size: 17px;

  &:hover {
    color: #ff5c77 !important;
    border-color: #ff5c77 !important;
  }
`;
const ButtonEnjoy = styled(Button)`
  width: 100px;
  height: 50px;
  font-size: 17px;
  background-color: #ff5c77;

  &:hover {
    background-color: #ff869a !important;
  }
`;

export default function Header() {
  const router = useRouter();

  const onClickTitle = () => {
    router.push("/");
  };
  return (
    <Wrapper>
      <TitleText onClick={onClickTitle}>Soyeon's Portfolio Board</TitleText>
      <EnjoyWrapper>
        <ButtonLogin>로그인</ButtonLogin>
        <ButtonEnjoy type="primary">회원가입</ButtonEnjoy>
      </EnjoyWrapper>
    </Wrapper>
  );
}
