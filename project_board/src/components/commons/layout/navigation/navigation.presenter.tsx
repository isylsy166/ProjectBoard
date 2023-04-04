import { Fragment } from "react";
import * as S from "../navigation/navigation.styles";
import { INavigationUIProps } from "./navigation.types";

const NAVIGATION_MENUS = [
  { name: "게시판", page: "/" },
  { name: "라이브상품", page: "/" },
  { name: "마이페이지", page: "/" },
];

export default function NavigationUI(props: INavigationUIProps) {
  return (
    <S.NavWrapper>
      {NAVIGATION_MENUS.map((el) => (
        <Fragment key={el.page}>
          <S.MenuItem id={el.page} onClick={props.onClickMenu}>
            {el.name}
          </S.MenuItem>
        </Fragment>
      ))}
    </S.NavWrapper>
  );
}
