import React, { Component } from 'react';
import { BankFilled, PoweroffOutlined, UserOutlined } from '@ant-design/icons'
import './index.scss';

class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="nav">
        <div className="head-menu">
          <div className="go-back">
            <BankFilled /> 返回
          </div>
          <div className="logout">
            <PoweroffOutlined /> 注销
          </div>
          <div className="user">
            管理员: admin <UserOutlined />
          </div>
        </div>
      </div>
    )
  }
}

export default Nav;