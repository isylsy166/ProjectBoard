// import {
//   Btn3span,
//   Button3,
// } from "@/src/buttons/Button01/animation_buttons.styles";
// import * as S from "@/src/components/units/board/write/BoardWrite.styles";
import * as S from "../write/BoardWrite.styles";
import {
  Btn3span,
  Button3,
} from "../../../../../src/buttons/Button01/animation_buttons.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <S.Page>
      <S.Wrapper>
        <S.Title>게시글 {props.isEdit ? "수정" : "등록"}</S.Title>
        <S.SubWrapperRow>
          <S.InputWrapper>
            <S.Text>작성자</S.Text>
            <S.Writer
              placeholder="이름을 입력하세요"
              onChange={props.onChangeWriter}
              defaultValue={props.data?.fetchBoard.writer}
            />
            <S.Error>{props.writerError}</S.Error>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Text>비밀번호</S.Text>
            <S.Writer
              type="password"
              placeholder="비밀번호를 입력하세요"
              onChange={props.onChangePassword}
            />
            <S.Error>{props.passwordError}</S.Error>
          </S.InputWrapper>
        </S.SubWrapperRow>
        <S.SubWrapperColumn>
          <S.InputWrapper2>
            <S.Text>제목</S.Text>
            <S.Writer
              placeholder="제목을 입력하세요"
              onChange={props.onChangeTitle}
              defaultValue={props.data?.fetchBoard.title}
            />
            <S.Error>{props.titleError}</S.Error>
          </S.InputWrapper2>
          <S.InputWrapper2>
            <S.Text>내용</S.Text>
            <S.Content
              placeholder="내용을 입력하세요"
              onChange={props.onChangeContents}
              defaultValue={props.data?.fetchBoard.contents}
            />
            <S.Error>{props.contentsError}</S.Error>
          </S.InputWrapper2>
        </S.SubWrapperColumn>

        <S.SubWrapperRow>
          <S.InputWrapper2>
            <S.Text>주소</S.Text>
            <S.AddressWriter placeholder="43341"></S.AddressWriter>
            <S.AddressButton>주소 검색</S.AddressButton>
            <S.AddressWrapper>
              <S.Writer></S.Writer>
              <S.Writer></S.Writer>
            </S.AddressWrapper>
          </S.InputWrapper2>
        </S.SubWrapperRow>

        <S.SubWrapperColumn>
          <S.InputWrapper2>
            <S.Text>사진첨부</S.Text>
            <S.AddImageWrapper>
              <S.AddImage>
                +<br /> Upload
              </S.AddImage>
              <S.AddImage>
                +<br /> Upload
              </S.AddImage>
              <S.AddImage>
                +<br /> Upload
              </S.AddImage>
              <S.AddImage>
                +<br /> Upload
              </S.AddImage>
            </S.AddImageWrapper>
          </S.InputWrapper2>
        </S.SubWrapperColumn>

        <S.SubWrapperColumn>
          <S.Text>메인설정</S.Text>
          <S.InputWrapper3>
            <S.Text2>유튜브</S.Text2>
            <S.RadioButton type="radio" id="youtube" name="radio-button" />
            <S.Text2>사진</S.Text2>
            <S.RadioButton type="radio" id="image" name="radio-button" />
          </S.InputWrapper3>
        </S.SubWrapperColumn>

        <S.SubWrapperRow>
          <S.SubmitWrapper>
            <Button3
              onClick={props.isEdit ? props.onClickEdit : props.onClickSubmit}
              isActive={props.isEdit ? props.isActive : false}
            >
              <Btn3span>{props.isEdit ? "수정하기" : "등록하기"}</Btn3span>
            </Button3>
          </S.SubmitWrapper>
        </S.SubWrapperRow>
      </S.Wrapper>
    </S.Page>
  );
}
