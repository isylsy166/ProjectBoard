import { IQuery } from "../../../../commons/types/types";

export interface IBoardDetailProps {}

export interface IBoardDetailUIProps {
  data: Pick<IQuery, "fetchBoard">;
  onClickMoveBoardList: () => void;
  onClickEdit: () => void;
  onClickBoardDelete: (event) => void;
}
