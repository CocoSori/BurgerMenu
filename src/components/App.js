import React from "react";
import { Switch, Route } from "react-router-dom";

import BurgerList from "./BurgerList";
import BurgerConstructor from "./BurgerConstructor";
import Order from "./Order";
import NavBar from "./NavBar";

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <BurgerList />
        </Route>
        <Route path="/burger">
          <BurgerConstructor />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default App;
