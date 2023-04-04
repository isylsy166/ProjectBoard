import { MouseEvent } from "react";
import { useRouter } from "next/router";
import NavigationUI from "./navigation.presenter";

export default function Navigation() {
  const router = useRouter();

  const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
    void router.push(event.currentTarget.id);
  };

  return <NavigationUI onClickMenu={onClickMenu} />;
}
