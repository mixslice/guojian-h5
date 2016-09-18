import React from 'react';
import { Route, IndexRoute } from 'react-router';
import {
  App,
  NotFound,
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
    <Route path="*" component={NotFound} status={404} />
  </Route>
);