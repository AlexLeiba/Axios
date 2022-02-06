import React from "react";
import { Container, ButtonElement } from "./Button.style";
interface Props {
  type: string;
  title: string;
  handleClick?: () => void;
}

export function Button({ type, title, handleClick }: Props) {
  return (
    <Container>
      <ButtonElement type={type} onClick={handleClick}>
        {title}
      </ButtonElement>
    </Container>
  );
}
