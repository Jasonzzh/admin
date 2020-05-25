import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Nav from '../component/nav';
import LeftMenu from '../component/leftMenu';

class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {
    console.log(this.props.routes)
  }

  render() {
    const { routes } = this.props
    return (
      <div style={ style.contain }>
        <LeftMenu />
        <div style={ style.content }>
          <Nav />
          <Router>
            <Switch>
              {routes.map((item, index) => {
                if (item.exact) {
                  return <Route exact key={ index } path={ item.path } component={ item.component } />
                } else {
                  return <Route key={ index } path={ item.path } component={ item.component } />
                }
              })}
            </Switch>
          </Router>
        </div>
      </div>
    )
  }
}

const style = {
  contain: {
    position: 'fixed',
    width: '100%',
    height: '100vh',
    top: '0',
    left: '0',
    display: 'flex',
    background: 'rgb(240,240,243)',
  },
  content: {
    flex: '1',
    transition: 'all 0.3s',
  }
}

export default Index;