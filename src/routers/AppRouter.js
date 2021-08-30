import React from 'react';
import {
 BrowserRouter as Router,
 Switch,
 Route
} from "react-router-dom";
import AuthRouter from './AuthRouter';
import DashBoardRoute from './DashBoardRoute';

const AppRouter = () => {
 return (
  <Router>
      <div>
        <Switch>
          <Route path="/auth" component={ AuthRouter } />
          <Route path="/" component={ DashBoardRoute } />
        </Switch>
      </div>
  </Router>
 );
}

export default AppRouter;
