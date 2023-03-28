import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Page = styled.div`
  width: 100vw;
  padding-top: 60px;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  border: 1px solid black;
  width: 600px;
  height: 600px;
  background-color: #e0e5ec;
  //정렬
  display: flex;
  flex-direction: column;
  align-items: center;
  //여백
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 40px;
  padding-right: 40px;
  //그림자넣기
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

const custom_btn = css`
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
`;

//버튼 1
export const Button1 = styled.button`
  margin: 20px;
  ${custom_btn}
  background: rgb(6,14,131);
  background: linear-gradient(
    0deg,
    rgba(6, 14, 131, 1) 0%,
    rgba(12, 25, 180, 1) 100%
  );
  border: none;
  :hover {
    background: rgb(0, 3, 255);
    background: linear-gradient(
      0deg,
      rgba(0, 3, 255, 1) 0%,
      rgba(2, 126, 251, 1) 100%
    );
  }
`;

export const Button2 = styled.button`
  margin: 20px;
  ${custom_btn}
  background: rgb(96,9,240);
  background: linear-gradient(
    0deg,
    rgba(96, 9, 240, 1) 0%,
    rgba(129, 5, 240, 1) 100%
  );
  border: none;
  :before {
    height: 0%;
    width: 2px;
  }
  :hover {
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5),
      -4px -4px 6px 0 rgba(116, 125, 136, 0.5),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),
      inset 4px 4px 6px 0 rgba(0, 0, 0, 0.4);
  }
`;

export const Button3 = styled.button`
  margin: 20px;
  ${custom_btn}
  background: rgb(0,172,238);
  background: linear-gradient(
    0deg,
    rgba(0, 172, 238, 1) 0%,
    rgba(2, 126, 251, 1) 100%
  );
  width: 130px;
  height: 40px;
  line-height: 42px;
  padding: 0;
  border: none;

  :before,
  :after {
    position: absolute;
    content: "";
    right: 0;
    top: 0;
    background: rgba(2, 126, 251, 1);
    transition: all 0.3s ease;
  }

  :before {
    height: 0%;
    width: 2px;
  }

  :after {
    width: 0%;
    height: 2px;
  }

  :hover {
    background: transparent;
    box-shadow: none;
  }
  :hover:before {
    height: 100%;
  }
  :hover:after {
    width: 100%;
  }
`;

export const Btn3span = styled.span`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;

  :hover {
    color: rgba(2, 126, 251, 1);
  }

  :before,
  :after {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    background: rgba(2, 126, 251, 1);
    transition: all 0.3s ease;
  }
  :before {
    width: 2px;
    height: 0%;
  }
  :after {
    width: 0%;
    height: 2px;
  }
  :hover:before {
    height: 100%;
  }
  :hover:after {
    width: 100%;
  }
`;
