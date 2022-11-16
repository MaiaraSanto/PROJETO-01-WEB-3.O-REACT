import styled from "styled-components";

export const ContainerTabela = styled.div`
width: 70rem;
  height: 15rem;
  background: #27272a;
  border: 2px solid #9d4b00;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 3rem;
  margin: 2rem;
  justify-content: space-around;
  

  ul {
    
    display: flex
            flex-direction: column
            list-style: none
            width: 100%
            height: 100%
            padding: 0 4px
            align-items: flex-start
            flex-wrap: wrap
            height: 150px;
            margin: 1rem;         

    li {
      font-size: 1.3rem;
      margin: 0 3rem;
      padding-left: 1rem;
      margin: 0rem;
      
    }
  }
`;
