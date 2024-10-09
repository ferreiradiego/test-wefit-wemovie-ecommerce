import IconProps from "./types";

const AddCartIcon = ({
  width = 14,
  height = 14,
  color = "#fff",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
  >
    <path
      fill={color}
      d="M6.267 5H7.4V3.3h1.7V2.167H7.4v-1.7H6.267v1.7h-1.7V3.3h1.7V5ZM4 10.1c-.623 0-1.128.51-1.128 1.133 0 .624.505 1.134 1.128 1.134.623 0 1.133-.51 1.133-1.134 0-.623-.51-1.133-1.133-1.133Zm5.667 0c-.624 0-1.128.51-1.128 1.133 0 .624.504 1.134 1.128 1.134.623 0 1.133-.51 1.133-1.134 0-.623-.51-1.133-1.133-1.133Zm-5.57-1.842.016-.068.51-.923h4.222c.425 0 .8-.233.992-.584l2.187-3.972-.986-.544h-.006L10.41 3.3 8.845 6.133H4.867l-.074-.153L3.524 3.3l-.538-1.133-.533-1.134H.6v1.134h1.133l2.04 4.3-.765 1.389c-.09.159-.141.346-.141.544 0 .623.51 1.133 1.133 1.133h6.8V8.4H4.238a.144.144 0 0 1-.142-.142Z"
    />
  </svg>
);
export default AddCartIcon;
