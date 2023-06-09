import { Tooltip } from "antd";
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
        <S.AddressWrapper>
          <Tooltip
            placement="bottom"
            title={`${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}`}
          >
            <img src="/images/location.png" />
          </Tooltip>
        </S.AddressWrapper>
      </S.Wrapper>

      <S.ButtonWrapper>
        <S.Button3 onClick={props.onClickMoveBoardList}>목록으로</S.Button3>
        <S.Button3 onClick={props.onClickEdit}>수정하기</S.Button3>
        <S.Button3
          id={props.data?.fetchBoard?._id}
          onClick={props.onClickBoardDelete}
        >
          삭제하기
        </S.Button3>
      </S.ButtonWrapper>
    </Page>
  );
}
