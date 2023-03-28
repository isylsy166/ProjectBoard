import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queries";
import { MouseEvent } from "react";
import { IBoardListProps } from "./BoardList.types";

export default function BoardList(props: IBoardListProps) {
  //게시글 가져오기
  const { data } = useQuery(FETCH_BOARDS);
  //console.log(data?.fetchBoards);

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
      onClickMoveBoardWrite={onClickMoveBoardWrite}
      onClickMoveBoardDetail={onClickMoveBoardDetail}
    />
  );
}
