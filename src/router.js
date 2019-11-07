import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';

import Layout from './components/layout';
import Tab1 from './routes/tab1';
import Tab2 from './routes/tab2';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/tab1" exact component={Tab1} />
          <Route path="/tab2" exact component={Tab2} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default RouterConfig;


