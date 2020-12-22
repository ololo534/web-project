import React from 'react'
import './App.css';
import {Redirect, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

import PrivateRoute from "./components/PrivateRoute";
import SignIn from "./pages/login/SignIn";
import Register from "./pages/registration/Register";
import Main from "./pages/main/Main";
import AuthProvider from "./components/AuthProvider";

function App() {
  return (
      <AuthProvider>
          <Switch>
              <PrivateRoute path="/" exact>
                  <Main />
              </PrivateRoute>
              <Route path="/sign_in" render={() => <SignIn />} />
              <Route path="/sign_up" render={() => <Register />} />
              <Redirect to="/" />
          </Switch>
      </AuthProvider>
  );
}

export default App;
