import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
 BrowserRouter as Router,
 Switch,
} from "react-router-dom";
import { renewLogin } from '../actions/auth';
import AuthRouter from './AuthRouter';
import DashBoardRoute from './DashBoardRoute';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const AppRouter = () => {

  const dispatch = useDispatch();
  const {checking} = useSelector(state => state.auth);
  const {logged} = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(renewLogin());
  }, [dispatch]);


  if(checking){
    return(
      <div className="spinner-grow text-light" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    )
  }


 return (
  <Router>
      <div>
        <Switch>
          <PublicRoute 
            path="/auth" 
            component={ AuthRouter } 
            isAuthenticated={logged}  
            />
          <PrivateRoute 
            path="/" 
            component={ DashBoardRoute } 
            isAuthenticated={logged}  
            />
        </Switch>
      </div>
  </Router>
 );
}

export default AppRouter;
