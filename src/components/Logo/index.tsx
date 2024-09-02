import Link from "next/link";
import { LogoContainer } from "./styles";

const Logo = () => {
  return (
    <LogoContainer>
      <Link href="/">WeMovies</Link>
    </LogoContainer>
  );
};

export default Logo;
