import styled from "styled-components/macro";
import NavList from "./NavList";
import BurgerMenue from "../assets/burger-menue.svg";
import { useState } from "react";

const Head = styled.header`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0px;
  left: 0px;
  background: var(--primary-color);
  display: flex;
  justify-content: flex-end;
  padding: 20px;
`;

const Navbar = styled.div`
  display: flex;
  justify-content: center;

  img {
    height: 25px;
    cursor: pointer;
  }
`;

export const Header = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Head>
        <Navbar>
          <NavList open={open} toggle={toggle} />
          <img src={BurgerMenue} alt="Burger Menue" onClick={toggle} />
        </Navbar>
      </Head>
    </>
  );
};
