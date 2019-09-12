import React from 'react';
import NgpPlayer from './NgpPlayer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from '../styles/GlobalStyle';

const App = () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route exact path="/"  component={NgpPlayer} />
        <Route exact path="/:activeVideo"  component={NgpPlayer} />
      </Switch>  
      <GlobalStyle />
    </>
  </BrowserRouter>
)
//The entire <Switch> is wrapped within <> </> as it will throw an error for multiple child elements

export default App;