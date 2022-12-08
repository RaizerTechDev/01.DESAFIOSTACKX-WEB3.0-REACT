import styled from "styled-components";

export const ContainerTabela = styled.div`
width: 66rem;
  height: 15rem;
  background: #27272a;
  border: 2px solid #9d4b00;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 3rem;
  margin: 1rem;
  justify-content: space-around;  

  ul {
    
    display: flex
            flex-direction: column
            list-style: none
            width: 100%
            height: 100%
            padding: 0 2rem
            align-items: flex-start
            flex-wrap: wrap
            height: 150px;
            margin: 1rem;  
            
            &:hover{
              filter: brightness(1.3);
              cursor: pointer;               
            }
    li {
      font-size: 1.3rem;
      margin: 0 3rem;
      padding-left: 1rem;
      margin: 0rem; 

      &:hover{  
        color: #3ab40e;  
    }   
  }
`;
