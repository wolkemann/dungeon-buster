import styled from "styled-components";

export const Button = styled.div`
  margin: 10px;
  padding: 5px;
  background-color: var(--primary-color);
  border: 3px var(--primary-color) solid;
  outline: 3px var(--secondary-color) solid;

  text-align: ${(props) => (props.textAlign ? props.textAlign : null)};

  &:hover {
    background-color: var(--secondary-color);
    color: var(--primary-color);
    transition: 0.1s;
  }
`;
