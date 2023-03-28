//상세페이지

import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
import BoardCommentList from "../../../src/components/units/boardComment/list/boardCommentList.contariner";
import BoardCommentWrite from "../../../src/components/units/boardComment/write/boardCommentWrite.contariner";

export default function BoardDetailPage() {
  return (
    <div>
      <BoardDetail />
      <BoardCommentWrite />
      <BoardCommentList />
    </div>
  );
}
