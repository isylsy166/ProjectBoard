import { IQuery, IQueryFetchBoardsArgs } from "../../../../commons/types/types";
import { ApolloQueryResult } from "@apollo/client";
import { MouseEvent } from "react";

export interface IBoardListUIProps {
  count: number | undefined;

  data?: Pick<IQuery, "fetchBoards">;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;

  onClickMoveBoardWrite: () => void;
  onClickMoveBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
}
