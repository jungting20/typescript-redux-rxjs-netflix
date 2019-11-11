import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from '../Routes/Home';

export default () => {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </>
    </Router>
  );
};
