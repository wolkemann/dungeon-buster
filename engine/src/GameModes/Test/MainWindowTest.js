import styled from "styled-components";
import Navbar from "../../GameUI/AdventureModeUI/Navbar/Navbar";

export default function MainWindow() {
  return (
    <Wrapper>
      <Wrapper2>
        <Navbar />
      </Wrapper2>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 960px;
  height: 650px;
  border: 3px var(--primary-color) solid;
`;

const Wrapper2 = styled.div`
  border: 3px var(--secondary-color) solid;
`;
