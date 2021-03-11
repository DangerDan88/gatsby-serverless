import React from "react";
import styled from "styled-components";

const StyledHome = styled.div`
  display: flex;
  justify-content: center;
`;

function HomePage() {
  return (
    <StyledHome>
      <h1>Best Barber in Magna</h1>
    </StyledHome>
  );
}

export default HomePage;

// figure out how to not push .gitignore file
