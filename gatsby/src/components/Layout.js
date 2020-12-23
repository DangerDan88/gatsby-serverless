import React from "react";
import Nav from "./Nav";
import GlobalStyles from "../styles/GlobalStyle";
import styled from "styled-components";
import Footer from "../components/Footer";
import Typography from "../styles/Typography";

const SiteBorderStyles = styled.div`
  max-width: 1000px;
  margin: 12rem auto 4rem auto;
  margin-top: clamp(2rem, 10vw, 12rem);
  background: white;
  background-size: 80em;
  padding: 5px;
  padding: clamp(5px, 1vw, 25px);
  box-shadow: 0 0 px 3px rgba(0, 0, 0, 0.044);
  border: 5px solid greenyellow;
  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

const SiteHeader = styled.div`
  font-size: 3rem;
  text-align: center;
  padding-top: 1rem;
`;

export default function Layout({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Typography />
      <SiteHeader>Danger Clothing</SiteHeader>
      <SiteBorderStyles>
        <Nav /> {children}
        <Footer />
      </SiteBorderStyles>
    </div>
  );
}
