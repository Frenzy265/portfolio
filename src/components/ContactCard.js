import styled from "styled-components/macro";

const ContactCard = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--secondary-color);
  color: var(--primary-color);
  font-size: 2rem;
  cursor: pointer;
  grid-auto-flow: column;

  :hover,
  :active {
    background: ${(props) => props.hoverColor};
  }
`;

export default ContactCard;
