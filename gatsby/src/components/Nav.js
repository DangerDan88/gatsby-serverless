import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NavStyles = styled.nav`
  margin-bottom: 3rem;
  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
    display: grid;
    grid-auto-flow: column;
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
      color: whitesmoke;
    }
  }

  .link {
    color: blue;
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/store">
            Store
          </Link>
        </li>

        <li>
          <Link className="link" to="/cart">
            View Cart
          </Link>
        </li>
      </ul>
    </NavStyles>
  );
}
