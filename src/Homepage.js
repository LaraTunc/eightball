import React from "react";
import styled from "styled-components";

const Homepage = () => {
  const height = document.getElementsByClassName("ball").clientHeight;
  console.log("height", height);

  return (
    <Wrapper>
      <Ball className="ball" height={height}>
        Ball Click and it switches and goes to ask
      </Ball>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  background: gray;
  color: white;
`;

const Ball = styled.div`
  display: flex;
  height: 90%;
  width: ${(height) => height};
  border-radius: 50%;
  border: 2px solid black;
`;

export default Homepage;
