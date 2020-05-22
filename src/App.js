import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import routes from './router/index.js';
import Nav from './component/nav'
import './App.css';

function App() {
  return (
    <div className="app">
    <Nav />
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
    </div>
  );
}

export default App;
