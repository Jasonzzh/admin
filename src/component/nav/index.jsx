import React, { Component } from 'react';
import { Button } from 'antd';
import './index.scss';

class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navData: [
        { title: '后台首页', url: '/' },
        { title: '网站设置', url: '/' },
      ]
    }
  }

  render() {
    const { navData } = this.state
    return (
      <div className="nav">
        <div className="menu">
          {navData.map((item, index) => {
            return <Button key={ index } type="link">{ item.title }</Button>
          })}
        </div>
      </div>
    )
  }
}

export default Nav;