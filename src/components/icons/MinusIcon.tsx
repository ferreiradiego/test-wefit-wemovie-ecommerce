import IconProps from "./types";

const MinusIcon = ({
  width = 18,
  height = 18,
  color = "#009EDD",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
  >
    <path
      fill={color}
      d="M4.5 8.1v1.8h9V8.1h-9ZM9 0C4.032 0 0 4.032 0 9s4.032 9 9 9 9-4.032 9-9-4.032-9-9-9Zm0 16.2c-3.969 0-7.2-3.231-7.2-7.2 0-3.969 3.231-7.2 7.2-7.2 3.969 0 7.2 3.231 7.2 7.2 0 3.969-3.231 7.2-7.2 7.2Z"
    />
  </svg>
);
export default MinusIcon;
