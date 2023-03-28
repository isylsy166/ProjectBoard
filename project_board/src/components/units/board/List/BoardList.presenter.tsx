import * as L from "../List/BoardList.styles";
import { getDate } from "../../../commons/libraries/utils";
import { Page } from "../write/BoardWrite.styles";
import { IBoardListUIProps } from "./BoardList.types";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <Page>
      <L.Wrapper>
        <L.HeadWrapper>
          <L.HeadID>아이디</L.HeadID>
          <L.HeadBasic>작성자</L.HeadBasic>
          <L.HeadTitle>제목</L.HeadTitle>
          <L.HeadBasic>날짜</L.HeadBasic>
        </L.HeadWrapper>

        {props.data?.fetchBoards.map((el, index) => {
          return (
            <L.Row
              id={el._id}
              key={el._id}
              onClick={props.onClickMoveBoardDetail}
            >
              <L.ID>{el._id}</L.ID>
              <L.Basic>{el.writer}</L.Basic>

              <L.Title id={el._id}>{el.title}</L.Title>
              <L.Basic>{getDate(el.createdAt)}</L.Basic>
            </L.Row>
          );
        })}
        <L.ButtonWrapper>
          <L.Button onClick={props.onClickMoveBoardWrite}>
            게시글 등록하기 <L.PencilIcon src="/images/write.png" />
          </L.Button>
        </L.ButtonWrapper>
      </L.Wrapper>
    </Page>
  );
}
