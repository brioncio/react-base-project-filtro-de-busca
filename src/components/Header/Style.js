import styled from "styled-components"

const Top = styled.header`
  padding: .5em 2em;
  background-color: var(--background);
  display: flex;
  flex-direction: row;
  margin: 0;
  align-items: center;
  a {
    text-align: center;
    padding: .3em;
    margin: 0 .7em;
    min-width: 5em;
    text-decoration: none;
    font-weight: bold;
    color: var(--primaria);
    text-transform: uppercase;
    &:hover{
      background-color: var(--destaque);
      color: var(--secundaria);
      }
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    
    a {
      margin: 0.5em 0;
    }
  }

  @media (max-width: 425px) {
    padding: 0.5em 1em;
    
    a {
      min-width: 100%;
      text-align: left;
    }
  }
`;

export { Top };

