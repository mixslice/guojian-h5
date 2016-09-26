import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import {
  App,
  HomeApp,
  FormApp,
  EditApp,
  ExportApp,
  ShareApp,
} from 'containers';
import { loadWxConfig } from 'utils';


export default (
  <Route path="/" component={App} onChange={loadWxConfig}>
    <IndexRoute component={HomeApp} />
    <Route path="form" component={FormApp} />
    <Route path="edit" component={EditApp} />
    <Route path="export" component={ExportApp} />
    <Route path="image/:uid" component={ShareApp} />
    <Redirect from="*" to="/" />
  </Route>
);
