import styled, { css } from "styled-components";
import { ButtonProps } from "./types";

const ButtonContainer = styled.button<{ $state: ButtonProps["state"] }>`
  background-color: var(--button-bg-empty);
  font-family: inherit;

  ${({ $state }) =>
    $state === "selected" &&
    css`
      background-color: var(--button-bg-selected);
    `}

  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 14px;
  border-radius: 4px;
  padding: 8px;
  height: 40px;
  transition: background-color 300ms ease-out;

  ${({ $state }) =>
    $state === "empty" &&
    css`
      &:hover {
        background-color: var(--button-bg-hover);
      }
    `}
`;

const ButtonContent = styled.span`
  width: 25px;
  height: 17px;
  font-weight: regular;
  font-size: 12px;
  line-height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonText = styled.span`
  font-style: normal;
  font-size: 12px;
  width: 157px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { ButtonContainer, ButtonText, ButtonContent };
