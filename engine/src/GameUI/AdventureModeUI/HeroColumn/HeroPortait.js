import styled from "styled-components";

export const HeroPortait = styled.div`
  width: 260px;
  height: 466px;
  border: 3px var(--primary-color) solid;
  outline: 3px var(--secondary-color) solid;
  background-image: url(resources/faces/${(props) => props.image});
  background-position: center;
  margin-bottom: 3px;
`;
