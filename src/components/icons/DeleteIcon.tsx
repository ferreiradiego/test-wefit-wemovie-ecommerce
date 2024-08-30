import * as React from "react";

interface DeleteIconProps {
  width: number;
  height: number;
}
const DeleteIcon = ({ width, height }: DeleteIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
  >
    <path
      fill="#009EDD"
      d="M1.143 16c0 1.1 1.028 2 2.286 2h9.142c1.258 0 2.286-.9 2.286-2V4H1.143v12ZM16 1h-4l-1.143-1H5.143L4 1H0v2h16V1Z"
    />
  </svg>
);
export default DeleteIcon;
