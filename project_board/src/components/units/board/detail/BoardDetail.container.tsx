//상세페이지

import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery, IQueryFetchBoardArgs } from "../../../../commons/types/types";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";
import { IBoardDetailProps } from "./BoardDetail.types";

export default function BoardDetail(props: IBoardDetailProps) {
  //페이지 이동을 위해 라우터 사용
  const router = useRouter();

  //먼저 GraphQL에 있는 FetchBoard에 있는 데이터 가져와야됨
  const { data } = useQuery<Pick<IQuery, "fetchBoard">>(FETCH_BOARD, {
    variables: { boardId: router.query.BoardDetail },
  });

  const [deleteBoard] = useMutation(DELETE_BOARD);

  //목록으로
  const onClickMoveBoardList = () => {
    router.push("/boards/BoardList");
  };

  //수정하기
  const onClickEdit = () => {
    // router.push(`/boards/${router.query}/BoardEdit`);
    router.push(`/boards/${data.fetchBoard._id}/BoardEdit`);
  };

  //삭제하기
  const onClickBoardDelete = async (event) => {
    await deleteBoard({
      variables: { boardId: event.target.id },
      refetchQueries: [{ query: FETCH_BOARD }],
    });
    alert("게시글이 삭제되었습니다.");
    router.push("/boards/BoardList");
  };

  return (
    <BoardDetailUI
      data={data}
      onClickMoveBoardList={onClickMoveBoardList}
      onClickBoardDelete={onClickBoardDelete}
      onClickEdit={onClickEdit}
    />
  );
}
