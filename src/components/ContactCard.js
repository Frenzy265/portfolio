import styled from "styled-components/macro";

const ContactCard = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--secondary-color);
  color: var(--primary-color);
  font-size: 4rem;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.16);
  cursor: pointer;
  grid-auto-flow: column;

  :hover,
  :active {
    background: ${(props) => props.hoverColor};
  }
`;

export default ContactCard;
