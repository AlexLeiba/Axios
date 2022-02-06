import React from "react";
import { Container, Label, InputElement, Error } from "./Input.style";

interface Props {
  value: string;
  type: string;
  id: string;
  placeholder?: string;
  error?: string;
  label?: string;
  handleChange: (id: string, value: string) => void;
}
export function Input({
  value,
  type,
  id,
  placeholder,
  error,
  label,
  handleChange,
}: Props) {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>

      <InputElement
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={(e) => handleChange(id, e.target.value)}
      />

      <Error>{error}</Error>
    </Container>
  );
}
