import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import {
  App,
  HomeView,
  FormView,
  EditView,
  ExportView,
} from 'views';
import { loadWxConfig } from 'utils';
// onChange={loadWxConfig}

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeView} />
    <Route path="form" component={FormView} />
    <Route path="edit" component={EditView} />
    <Route path="export" component={ExportView} />
    <Redirect from="*" to="/" />
  </Route>
);
