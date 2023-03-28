import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { FETCH_BOARD_COMMENTS } from "../list/boardCommentList.queries";
import BoardCommentWriteUI from "./boardCommentWrite.presenter";
import { CREATE_BOARD_COMMENT } from "./boardCommentWrite.queries";

export default function BoardCommentWrite() {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

  const onChangeWriter = (e) => {
    setWriter(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeContents = (e) => {
    setContents(e.target.value);
  };

  const onClickWrite = async () => {
    await createBoardComment({
      variables: {
        createBoardCommentInput: {
          writer: writer,
          password: password,
          contents: contents,
          rating: 0,
        },
        boardId: router.query.BoardDetail,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENTS,
          variables: { boardId: router.query.BoardDetail },
        },
      ],
    });
  };

  return (
    <BoardCommentWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickWrite={onClickWrite}
    />
  );
}
