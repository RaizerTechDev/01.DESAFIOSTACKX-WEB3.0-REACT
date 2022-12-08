import { ContainerHeader, ContainerLogo} from "./styles";
import Logo from "../../../assets/images/stack.png";

export const Header = () => {
  return (
    <ContainerHeader>
      <ContainerLogo>
        <img src={Logo} alt="Logo StackX" /> 
      </ContainerLogo>    
    </ContainerHeader>
  );
};
