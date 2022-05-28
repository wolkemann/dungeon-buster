import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleSystemWindow } from "../../../GameGlobals/AdventureModeGlobals";
import styled from "styled-components";
import { NavbarButton } from "./NavbarButton";
import { NavbarLabel } from "./NavbarLabel";

export default function Navbar() {
  const [rendered, setRendered] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rendered) {
      makeDraggable();
    }

    if (!rendered) {
      setRendered(true);
    }
  }, [rendered]);

  async function makeDraggable() {
    await window.Neutralino.window.setDraggableRegion("draggable");
  }

  function handleOpenSystemWindow() {
    dispatch(toggleSystemWindow());
  }

  return (
    <Wrapper>
      <NavbarButton>&#9812;</NavbarButton>
      <NavbarButton>&#10086;</NavbarButton>
      <NavbarButton>&#9815;</NavbarButton>
      <NavbarButton>&#9909;</NavbarButton>
      <NavbarLabel id="draggable">Adventure Mode</NavbarLabel>
      <NavbarButton onClick={handleOpenSystemWindow}>&#9778;</NavbarButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: var(--secondary-color);
  display: flex;
  gap: 3px;
  margin-bottom: 3px;
  outline: 3px var(--secondary-color) solid;
`;
