import styled from "styled-components/macro";
import NavBar from "./NavBar";
import { useState } from "react";
import * as IoIcon from "react-icons/io5";

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

const NavContainer = styled.div`
  display: flex;
  justify-content: center;

  svg {
    align-self: start;
    font-size: 3rem;
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
        <NavContainer>
          <NavBar open={open} toggle={toggle} />
          {open ? (
            <IoIcon.IoClose onClick={toggle} />
          ) : (
            <IoIcon.IoMenu onClick={toggle} />
          )}
        </NavContainer>
      </Head>
    </>
  );
};
