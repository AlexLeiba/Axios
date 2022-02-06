import styled from "styled-components";

interface Props {
  type: string;
}

export const Container = styled.div`
  min-width: 50%;
  padding: 10px;
`;

export const ButtonElement = styled.div<Props>`
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  color: white;
  border-radius: 8px;
  padding: 5px;
  text-align: center;

  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }

  background-color: ${({ type }) => {
    switch (type) {
      case "submit":
        return "blue";
      case "clear":
        return "red";

      default:
        return "white";
    }
  }};
`;
