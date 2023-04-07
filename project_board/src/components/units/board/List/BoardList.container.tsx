import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS, FETCH_BOARD_COUNT } from "./BoardList.queries";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/types";

export default function BoardList(props) {
  //게시글 가져오기
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  // 게시글 개수
  const { data: boardCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARD_COUNT);

  //페이지 이동
  const router = useRouter();

  const onClickMoveBoardWrite = () => {
    router.push("/boards/BoardWrite");
  };

  const onClickMoveBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/boards/${event.currentTarget.id}`);
  };

  return (
    <BoardListUI
      data={data}
      refetch={refetch}
      count={boardCount?.fetchBoardsCount} // 전체 게시글 개수
      onClickMoveBoardWrite={onClickMoveBoardWrite}
      onClickMoveBoardDetail={onClickMoveBoardDetail}
    />
  );
}
