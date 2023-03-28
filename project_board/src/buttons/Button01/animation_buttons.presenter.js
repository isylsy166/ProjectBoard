import {
  Page,
  Wrapper,
  Button1,
  Text1,
  Button2,
  Button3,
  Btn3span,
} from "@/src/buttons/Button01/animation_buttons.styles";

export default function AnimationButtonsUI() {
  return (
    <Page>
      <Wrapper>
        <Button1>ReadMore</Button1>

        <Button2>Click</Button2>

        <Button3>
          <Btn3span>ReadMore</Btn3span>
        </Button3>
      </Wrapper>
    </Page>
  );
}
