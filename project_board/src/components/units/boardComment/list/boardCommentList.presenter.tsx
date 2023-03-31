import { Rate } from "antd";
import { getDate } from "../../../commons/libraries/utils";
import { Page } from "../../board/write/BoardWrite.styles";
import * as S from "./boardCommentList.styles";
import { IBoardCommentListUIProps } from "./boardCommentList.types";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  return (
    <div>
      {props.modal2Open && (
        <S.CommentModal
          title="비밀번호를 입력하세요"
          centered
          open={true}
          onOk={props.onClickDelete}
          onCancel={props.onCancel}
        >
          <S.InputPW type="password" onChange={props.onChangeModalInput} />
        </S.CommentModal>
      )}

      <Page>
        {props.data?.fetchBoardComments.map((el) => (
          //
          <S.Wrapper>
            {/* 프로필 */}
            <S.ProfileWrapper id={el.writer} onClick={props.onClickWrapper}>
              <S.Avatar src="/images/avatar.png" />
              <S.Name id={el.writer}>{el.writer}</S.Name>
              <Rate value={el.rating} disabled />
              <S.DateString>{getDate(el.createdAt)}</S.DateString>
            </S.ProfileWrapper>
            {/* /내용/ */}
            <S.ContentsWrapper>
              <S.Contents>{el.contents}</S.Contents>
              <S.OptionWrapper>
                <S.EditIcon />
                <S.DeleteIcon id={el._id} onClick={props.onClickDeleteIcon} />
              </S.OptionWrapper>
            </S.ContentsWrapper>
            {/*  */}
          </S.Wrapper>
        ))}
      </Page>
    </div>
  );
}
