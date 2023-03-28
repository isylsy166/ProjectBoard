// 수정페이지

import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../src/commons/types/types";
import { FETCH_BOARD } from "../../../../src/components/units/board/detail/BoardDetail.queries";
import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";

export default function BoardEditPage() {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.BoardDetail) },
    }
  );

  return <BoardWrite isEdit={true} data={data} />;
}
