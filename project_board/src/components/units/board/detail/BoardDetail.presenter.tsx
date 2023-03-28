import { getDate } from "../../../commons/libraries/utils";
import * as S from "../detail/BoardDetail.styles";
import { Page } from "../write/BoardWrite.styles";
import { IBoardDetailUIProps } from "./BoardDetail.types";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <Page>
      <S.Wrapper>
        <S.Header>
          <S.Vector src="/images/Vector.png" />
          <S.Inform>
            <S.Name>{props.data?.fetchBoard?.writer}</S.Name>
            <S.Date>{getDate(props.data?.fetchBoard?.createdAt)}</S.Date>
          </S.Inform>
        </S.Header>

        <S.Body>
          <S.Title>{props.data?.fetchBoard?.title}</S.Title>
          <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
        </S.Body>
      </S.Wrapper>
      <S.ButtonWrapper>
        <S.Button onClick={props.onClickMoveBoardList}>목록으로</S.Button>
        <S.Button onClick={props.onClickEdit}>수정하기</S.Button>
        <S.Button
          id={props.data?.fetchBoard?._id}
          onClick={props.onClickBoardDelete}
        >
          삭제하기
        </S.Button>
      </S.ButtonWrapper>
    </Page>
  );
}
