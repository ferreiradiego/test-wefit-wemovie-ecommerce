import { ButtonContainer } from "./styles";
import { ButtonProps } from "./types";

const Button = ({ state = "empty", ...props }: ButtonProps) => {
  return (
    <ButtonContainer $state={state} {...props}>
      {props.children}
    </ButtonContainer>
  );
};

export default Button;
