import Pagination01UI from "./Pagination01.presenter";
import { useState, MouseEvent } from "react";
import { IPagination01Props } from "./Pagination01.types";

export default function Pagination01(props: IPagination01Props) {
  const [startPage, setStartPage] = useState(1);
  const lastPage = props.count != null ? Math.ceil(props.count / 10) : 0;
  const [activePage, setActivePage] = useState(1); //선택한 페이지에 색칠

  // < 버튼
  const onClickPrev = () => {
    if (startPage === 1) return;
    setActivePage(startPage - 10);
    setStartPage(startPage - 10);
  };

  // > 버튼
  const onClickNext = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      setActivePage(startPage + 10);
      void props.refetch({ page: startPage + 10 });
    }
  };

  // 번호 클릭
  const onClickPageindex = (event: MouseEvent<HTMLSpanElement>) => {
    const activePage = Number(event.currentTarget.id);
    setActivePage(activePage);
    void props.refetch({ page: Number(event.currentTarget.id) });
  };

  return (
    <Pagination01UI
      startPage={startPage}
      lastPage={lastPage}
      activePage={activePage}
      onClickPrev={onClickPrev}
      onClickPageindex={onClickPageindex}
      onClickNext={onClickNext}
    />
  );
}
