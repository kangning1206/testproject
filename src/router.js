import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';

import AdminPage from './routes/adminPage';
import LoginPage from './routes/loginPage';
import LogoutPage from './routes/logoutPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/admin" exact component={AdminPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/logout" exact component={LogoutPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
