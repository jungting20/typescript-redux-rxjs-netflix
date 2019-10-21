import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

export default () => {
  return (
    <Router>
      <>
        <Header />
      </>
    </Router>
  );
};
