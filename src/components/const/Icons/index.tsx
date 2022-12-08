import { IProps } from "../../../stylesimport";
import { ContainerIcons } from "./styled";

export const Icons = ({ image, text, languages }: IProps) => {
  
    return (
      <>
        <ContainerIcons  onClick={()=> languages(text)}>
          <img src={image} alt="Brasil" />
          <p>{ text}</p>
        </ContainerIcons>
      </>
    )
  };
  