import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Categoria from './pages/cadastro/Categoria';
import NovosVideos from './pages/cadastro/Video';
import Erro404 from './pages/404';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/categoria" component={Categoria} />
      <Route path="/cadastro/video" component={NovosVideos} />
      <Route component={Erro404} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
