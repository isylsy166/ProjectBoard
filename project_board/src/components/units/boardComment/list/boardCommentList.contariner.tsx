import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardCommentListUI from "./boardCommentList.presenter";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./boardCommentList.queries";
import { IBoardCommentListProps } from "./boardCommentList.types";
import { MouseEvent, ChangeEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/types";

export default function BoardCommentList(props: IBoardCommentListProps) {
  const [modal2Open, setModal2Open] = useState(false);
  const [myBoardCommentId, setMyBoardCommentId] = useState("");
  const [myPassword, setMyPassword] = useState("");

  const router = useRouter();
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.BoardDetail) },
  });

  const onClickDeleteIcon = (event: MouseEvent<HTMLImageElement>) => {
    setModal2Open(true);
    setMyBoardCommentId(event.currentTarget.id);
  };

  const onCancel = () => {
    setModal2Open(false);
  };

  const onClickDelete = async (event: MouseEvent<HTMLImageElement>) => {
    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: myBoardCommentId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.BoardDetail },
          },
        ],
      });
      setModal2Open(false);
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickWrapper = (event: ChangeEvent<HTMLDivElement>) => {
    alert(`${event.currentTarget.id}님이 작성한 글입니다.`);
  };

  const onChangeModalInput = (event: ChangeEvent<HTMLInputElement>) => {
    setMyPassword(event.target.value);
  };

  return (
    <BoardCommentListUI
      data={data}
      onClickDeleteIcon={onClickDeleteIcon}
      onClickDelete={onClickDelete}
      onClickWrapper={onClickWrapper}
      onCancel={onCancel}
      modal2Open={modal2Open}
      onChangeModalInput={onChangeModalInput}
    />
  );
}
