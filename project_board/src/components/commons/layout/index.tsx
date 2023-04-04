import styled from "@emotion/styled";
import Banner from "./banner";
import Header from "./header";
import Navigation from "./navigation/navigation.container";

interface ILayoutProps {
  children: JSX.Element;
}

const Body = styled.div``;

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Navigation></Navigation>
      <Body>{props.children}</Body>
    </>
  );
}
