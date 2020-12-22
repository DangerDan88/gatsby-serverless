import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NavStyles = styled.nav`
  margin-bottom: 3rem;
  color: blue ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
    margin-top: -6rem;
  }
  li {
    list-style-type: none;
  }
  a {
    font-size: 3rem;
    text-decoration: none;
    &:hover {
      color: var(--red);
    }
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/store">Store</Link>
        </li>

        <li>
          <Link to="/cart">View Cart</Link>
        </li>
      </ul>
    </NavStyles>
  );
}
