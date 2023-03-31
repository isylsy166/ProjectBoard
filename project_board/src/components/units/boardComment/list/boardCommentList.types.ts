import { IQuery } from "../../../../commons/types/types";
import { ChangeEvent, MouseEvent } from "react";

export interface IBoardCommentListProps {
  onClickDelete: (event: MouseEvent<HTMLImageElement>) => void;
  onClickWrapper: () => void;

  data: Pick<IQuery, "fetchBoardComments">;
  myPassword: string;
}

export interface IBoardCommentListUIProps {
  data: Pick<IQuery, "fetchBoardComments">;
  modal2Open: boolean;
  setModal2Open: boolean;

  onClickDelete: (event: MouseEvent<HTMLImageElement>) => void;
  onClickDeleteIcon: () => void;
  onClickWrapper: (event: ChangeEvent<HTMLDivElement>) => void;
  onCancel: () => void;

  onChangeModalInput: (event: ChangeEvent<HTMLInputElement>) => void;
}
