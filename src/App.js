import React from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/ask">
          <Wrapper>ask</Wrapper>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid black;
`;

export default App;
