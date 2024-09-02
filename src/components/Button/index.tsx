import AddCartIcon from "../icons/AddCartIcon";
import { Label, LabelContainer, StyledButton } from "./styles";
import { ButtonProps } from "./types";

const Button = ({
  text,
  variant = "primary",
  label = 0,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton {...props} variant={variant}>
      <LabelContainer>
        <AddCartIcon />
        <Label>{label}</Label>
      </LabelContainer>
      {text}
    </StyledButton>
  );
};

export default Button;
