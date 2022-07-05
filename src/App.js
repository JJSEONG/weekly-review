import React from 'react';
import styled from 'styled-components'
import { Route } from 'react-router-dom';

import Home from './Home'
import Detail from './Detail'

function App() {

  return (
    <AppWrap className="App">
      <RouteWrap>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/detail/:day">
          <Detail />
        </Route>
      </RouteWrap>
    </AppWrap>
  );
}

const AppWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

const RouteWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 640px;
  border-radius: 20px;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.4);
`

export default App;
