import Banner from "./banner";
import Header from "./header";
import Navigation from "./navigation";

export default function Layout(props) {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Navigation></Navigation>
      <div>{props.children}</div>
    </>
  );
}
