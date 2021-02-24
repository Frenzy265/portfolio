import styled from "styled-components/macro";
import NavList from "./NavList";
import BurgerMenue from "../assets/burger-menue.svg";
import { useState } from "react";

const Container = styled.div`
  display: flex;

  img {
    height: 25px;
  }
`;

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    alert("toggle");
    setOpen(!open);
  };

  return (
    <>
      <Container>
        <NavList open={open}></NavList>
        <img src={BurgerMenue} alt="Burger Menue" onClick={toggle} />
      </Container>
    </>
  );
};
