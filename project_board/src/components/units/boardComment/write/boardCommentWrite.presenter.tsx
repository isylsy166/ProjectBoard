import { from } from "@apollo/client";
import { Page } from "../../board/write/BoardWrite.styles";
import * as S from "./boardCommentWrite.styles";

export default function BoardCommentWriteUI(props) {
  return (
    <Page>
      <S.Wrapper>
        <S.TitleWrapper>
          <S.Icon src="/images/pencil.png" />
          <S.Title>Comment!</S.Title>
        </S.TitleWrapper>

        <S.InputWrapper>
          <S.Input placeholder="Name" onChange={props.onChangeWriter} />
          <S.Input
            type="password"
            placeholder="Password"
            onChange={props.onChangePassword}
          />
          <S.Button onClick={props.onClickWrite}>등록</S.Button>
        </S.InputWrapper>

        <S.Contents
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          maxLength={100}
          onChange={props.onChangeContents}
        />
      </S.Wrapper>
    </Page>
  );
}
