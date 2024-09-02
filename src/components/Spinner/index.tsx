import { SpinnerAnimate } from "./styles";

const Spinner = () => {
  return (
    <SpinnerAnimate
      src="/assets/load-spinner.png"
      alt="Carregando..."
      quality={100}
      width={62}
      height={62}
      priority={true}
      color="#fff"
    />
  );
};

export default Spinner;
