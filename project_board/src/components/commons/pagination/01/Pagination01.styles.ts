import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

interface IPageindexProps {
  isActive?: boolean;
}

export const Pageindex = styled.span`
  width: 35px;
  height: 35px;
  padding-top: 8px;
  margin-left: 15px;
  margin-right: 15px;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  border: 2px solid gray;
  border-radius: 8px;

  background-color: ${(props: IPageindexProps) =>
    props.isActive ? "pink" : null};
  color: ${(props: IPageindexProps) => (props.isActive ? "white" : "black")};
  cursor: ${(props: IPageindexProps) => (props.isActive ? "none" : "pointer")};

  &:hover {
    color: ${(props: IPageindexProps) => (props.isActive ? "white" : "pink")};
    border-color: ${(props: IPageindexProps) =>
      props.isActive ? "gray" : "pink"};
  }
`;
