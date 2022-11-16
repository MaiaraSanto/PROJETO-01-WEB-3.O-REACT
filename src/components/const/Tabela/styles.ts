import styled from "styled-components";

export const ContainerTabela = styled.div`
  width: 53rem;
  height: 13rem;
  background: #27272a;
  border: 2px solid #9d4b00;
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 4.6rem;
  margin: 1rem;

  ul {
    display: flex;
    flex-direction: column;
    width: auto;
    height: 100%;
    align-items: flex-start;

    height: 160px;

    li {
      font-size: 1.7rem;
    }
  }
`;
