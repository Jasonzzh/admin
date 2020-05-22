import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import routes from './router/index.js';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((item, index) => {
          if (item.exact) {
            return <Route exact key = { index } path = { item.path } component = { item.component } />
          } else {
            return <Route key = { index } path = { item.path } component = { item.component } />
          }
        })}
      </Switch>
    </Router>
  );
}

export default App;
