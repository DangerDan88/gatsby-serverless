import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  max-width: 20 rem;
  text-align: center;
  background-color: black;
  padding: 3rem;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <p>&copy; Savant Deux {new Date().getFullYear()}</p>
    </StyledFooter>
  );
}
