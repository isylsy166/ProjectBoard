import { MouseEvent } from "react";
import { ApolloQueryResult } from "@apollo/client";
import { IQuery, IQueryFetchBoardsArgs } from "../../../../commons/types/types";

export interface IPagination01Props {
  count: number | undefined;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
}

export interface IPagination01UIProps {
  startPage: number;
  lastPage: number;
  activePage: number;

  onClickPrev: () => void;
  onClickPageindex: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickNext: () => void;
}
