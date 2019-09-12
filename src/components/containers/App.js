import React from 'react';
import NgpPlayer from './NgpPlayer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/"  component={NgpPlayer} />
    </Switch>  
  </BrowserRouter>
)

export default App;