import * as S from "../write/BoardWrite.styles";

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
            <S.AddressWriter
              readOnly
              value={
                props.zonecode ||
                props.data?.fetchBoard.boardAddress?.zipcode ||
                ""
              }
            ></S.AddressWriter>

            <S.SearchAddressButton onClick={props.onClickSearchAddress}>
              주소 검색
            </S.SearchAddressButton>

            {props.isModalOpen && (
              <S.AddressModal
                open={true}
                onOk={props.handleOk}
                onCancel={props.handleCancel}
              >
                <S.AddressSearchInput
                  onComplete={props.onCompleteAddressSearch}
                />
              </S.AddressModal>
            )}

            <S.AddressWrapper>
              <S.Address
                value={
                  props.address ||
                  props.data?.fetchBoard.boardAddress?.address ||
                  ""
                }
              />
              <S.Address
                onChange={props.onChangeAddressDetail}
                defaultValue={
                  props.data?.fetchBoard.boardAddress?.addressDetail
                }
              ></S.Address>
              <S.Error>{props.addressError}</S.Error>
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
            <S.ButtonSB
              onClick={props.isEdit ? props.onClickEdit : props.onClickSubmit}
            >
              {props.isEdit ? "수정하기" : "등록하기"}
            </S.ButtonSB>
          </S.SubmitWrapper>
        </S.SubWrapperRow>
      </S.Wrapper>
    </S.Page>
  );
}
