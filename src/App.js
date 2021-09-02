import './App.css';
import Main from "./pages/Main";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Favorite from "./pages/Favorite";
import React from "react";


function App() {

  return (
      <BrowserRouter>
          <Navbar />
          <Switch>
            <Route
                component={Main}
                path={'/main'}
                exact={true}
            />
            <Route
                component={Favorite}
                path={'/favorite'}
                exact={true}
            />
            <Redirect to={'/main'} />
          </Switch>
      </BrowserRouter>
  );
}

export default App;
