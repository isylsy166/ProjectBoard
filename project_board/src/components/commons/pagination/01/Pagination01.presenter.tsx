import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Pageindex, Wrapper } from "./Pagination01.styles";
import { IPagination01UIProps } from "./Pagination01.types";

export default function Pagination01UI(props: IPagination01UIProps) {
  return (
    <Wrapper>
      <LeftOutlined onClick={props.onClickPrev} />
      {new Array(10).fill(1).map((_, index) => {
        if (index + props.startPage <= props.lastPage) {
          return (
            <Pageindex
              id={index + props.startPage}
              onClick={props.onClickPageindex}
              isActive={props.startPage + index === props.activePage}
            >
              {index + props.startPage}
            </Pageindex>
          );
        } else {
          <Pageindex></Pageindex>;
        }
      })}
      <RightOutlined onClick={props.onClickNext} />
    </Wrapper>
  );
}
