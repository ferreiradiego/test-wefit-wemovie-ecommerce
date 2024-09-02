import AddCartIcon from "../icons/AddCartIcon";

interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary" | "success";
  label?: string | number;
}

const getBackgroundColor = (variant: ButtonProps["variant"]) => {
  switch (variant) {
    case "primary":
    default:
      return "bg-[#009EDD]";
    case "secondary":
      return "bg-[#0073A1]";
    case "success":
      return "bg-[#039B00]";
  }
};

const Button = ({ text, variant = "primary", label = 0 }: ButtonProps) => {
  return (
    <button
      className={`uppercase gap-3 font-bold text-xs text-white w-full h-[40px] flex items-center justify-center rounded-[4px] ${getBackgroundColor(
        variant
      )}`}
    >
      <div className="text-center flex font-normal">
        <AddCartIcon />
        <span className="ml-[3px]">{label}</span>
      </div>
      {text}
    </button>
  );
};

export default Button;
