import styled from "styled-components";
import { ButtonProps } from "./types";

const getBackgroundColor = (variant: ButtonProps["variant"]) => {
  switch (variant) {
    case "primary":
    default:
      return "#009EDD";
    case "secondary":
      return "#0073A1";
    case "success":
      return "#039B00";
  }
};

const StyledButton = styled.button<{ variant: ButtonProps["variant"] }>`
  text-transform: uppercase;
  gap: 12px;
  font-weight: bold;
  font-size: 0.75rem;
  color: white;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: ${({ variant }) => getBackgroundColor(variant)};
`;

const LabelContainer = styled.div`
  text-align: center;
  display: flex;
  font-weight: normal;
`;

const Label = styled.span`
  margin-left: 3px;
`;

export { StyledButton, LabelContainer, Label };
