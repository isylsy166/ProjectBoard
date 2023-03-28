import { IQuery } from "../../../../commons/types/types";
import { MouseEvent } from "react";

export interface IBoardCommentListProps {
  onClickDelete: (event: MouseEvent<HTMLImageElement>) => void;
  onClickWrapper: () => void;

  data: Pick<IQuery, "fetchBoardComments">;
}

export interface IBoardCommentListUIProps {
  data: Pick<IQuery, "fetchBoardComments">;

  onClickDelete: (event: MouseEvent<HTMLImageElement>) => void;
  onClickWrapper: () => void;
}
