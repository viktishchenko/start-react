import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Route path='/' exact={true}>
          <Dashboard></Dashboard>
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route></Route>
      </Router>
      {/* <Error /> */}
    </div>
  );
}

export default App;
