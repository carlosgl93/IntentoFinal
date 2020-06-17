import React, { useEffect, useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import './Layout.css';

/* 
Context
*/
import injectContext from "./Context/appContext";
import { Context } from "./Context/appContext";
import appContext from "./Context/appContext";
import { getState } from "./Context/Flux";


/* 
Componentes a importar
*/

import {Home} from "./Componentes/view/Home"
import {MyNav} from "./Componentes/Navbar"
import SignIn from "./Componentes/SignIn"
import SignUp from "./Componentes/SignUp"




function Layout() {

  const basename = process.env.BASENAME || "";


  return (
    <div className="layout">
      <BrowserRouter basename={basename}>
        
          <MyNav />
          <div className="wrapper">
            <Switch>
              <Route exact path="/" component={Home} />          
              <Route path="/register" component={SignUp} />
              <Route path="/login" component={SignIn} />
              <Route render={() => <h1>Not found!</h1>} />
            </Switch>
          </div>
          
        
      </BrowserRouter>  
    </div>
  );
}

export default injectContext(Layout);
