import styled from "styled-components";

export const Container = styled.div`
  width: 400px;

  padding: 5px;
`;

export const Label = styled.label`
  font-size: 20px;
  font-weight: 400;
  color: black;
  display: block;
  &:hover {
    opacity: 0.8;
  }
`;

export const InputElement = styled.input`
  width: 100%;
  border-radius: 8px;
  padding: 10px;
  font-size: 15px;

  &:focus {
    border: solid black 1px;
  }

  &:hover {
    opacity: 0.8;
    box-shadow: 0 0 2px 1px gray;
  }
`;

export const Error = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: #cc1d06;
  display: block;
  &:hover {
    opacity: 0.8;
  }
`;
