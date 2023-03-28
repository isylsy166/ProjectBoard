import { getDate } from "../../../commons/libraries/utils";
import { Page } from "../../board/write/BoardWrite.styles";
import * as S from "./boardCommentList.styles";
import { IBoardCommentListUIProps } from "./boardCommentList.types";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  return (
    <div>
      <Page>
        {props.data?.fetchBoardComments.map((el) => (
          <S.Wrapper id={el.writer} onClick={props.onClickWrapper}>
            <S.ProfileWrapper>
              <S.Avatar src="/images/avatar.png" />
              <S.Name id={el.writer}>{el.writer}</S.Name>
              <S.DateString>{getDate(el.createdAt)}</S.DateString>
            </S.ProfileWrapper>
            <S.ContentsWrapper>
              <S.Contents>{el.contents}</S.Contents>
              <S.OptionWrapper>
                <S.EditIcon />
                <S.DeleteIcon id={el._id} onClick={props.onClickDelete} />
              </S.OptionWrapper>
            </S.ContentsWrapper>
          </S.Wrapper>
        ))}
      </Page>
    </div>
  );
}
