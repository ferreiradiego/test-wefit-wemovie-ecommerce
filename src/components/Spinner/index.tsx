import Image from "next/image";

const Spinner = () => {
  return (
    <Image
      src="/assets/load-spinner.png"
      alt="Carregando..."
      quality={100}
      width={62}
      height={62}
      priority={true}
      className="animate-spin"
      color="#fff"
    />
  );
};

export default Spinner;
