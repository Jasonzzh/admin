import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
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
        <div className="contain">
          <img src={ require('../../assets/img/logo.png') } alt="张先森个人博客" className="logo"/>
          <div className="menu">
            {navData.map((item, index) => {
              return <Button key={ index }>{ item.title }</Button>
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Nav;