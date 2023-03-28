import { IQuery } from "../../../../commons/types/types";
import { MouseEvent } from "react";

export interface IBoardListProps {
  data?: Pick<IQuery, "fetchBoards">;
}

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  onClickMoveBoardWrite: () => void;
  onClickMoveBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
}
