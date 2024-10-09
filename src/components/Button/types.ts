export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  state?: "empty" | "selected";
}
