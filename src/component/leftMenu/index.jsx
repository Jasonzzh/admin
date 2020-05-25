import React, { Component } from 'react';
import { Menu } from 'antd';
import { PieChartOutlined, DesktopOutlined, ContainerOutlined, TeamOutlined } from '@ant-design/icons';
import './index.scss';

class LeftMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    }
  }

  toggleCollapsed = () => {
    const { collapsed } = this.state
    this.setState({
      collapsed: !collapsed,
    })
  }

  render() {
    const { collapsed } = this.state
      , { toggleCollapsed } = this
    return (
      <div className="left-menu">
        <div className="control" onClick={ toggleCollapsed }>
          <img src={ require('../../assets/img/logo.png') } alt="" className="logo"/>
        </div>
        <Menu mode="inline" inlineCollapsed={ collapsed } >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            新建文章
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            文章管理
          </Menu.Item>
          <Menu.Item key="3" icon={<TeamOutlined />}>
            用户管理
          </Menu.Item>
          <Menu.Item key="4" icon={<ContainerOutlined />}>
            主题管理
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default LeftMenu;