import styled from "@emotion/styled";

export default function Banner() {
  const Wrapper = styled.div`
    height: 300px;
    background-color: pink;
  `;
  return (
    <Wrapper>
      <div>배너입니다</div>
    </Wrapper>
  );
}
