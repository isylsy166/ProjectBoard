import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardCommentListUI from "./boardCommentList.presenter";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./boardCommentList.queries";
import { IBoardCommentListProps } from "./boardCommentList.types";
import { MouseEvent, ChangeEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/types";

export default function BoardCommentList(props: IBoardCommentListProps) {
  const router = useRouter();
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.BoardDetail) },
  });

  const onClickDelete = async (event: MouseEvent<HTMLImageElement>) => {
    const myPassword = prompt("비밀번호를 입력하세요.");
    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: event.currentTarget.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.BoardDetail },
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickWrapper = (event: ChangeEvent<HTMLDivElement>) => {
    alert(`${event.currentTarget.id}님이 작성한 글입니다.`);
  };

  return (
    <BoardCommentListUI
      data={data}
      onClickDelete={onClickDelete}
      onClickWrapper={onClickWrapper}
    />
  );
}
