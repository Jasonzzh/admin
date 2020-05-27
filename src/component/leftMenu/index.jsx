import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Menu } from 'antd';
import { HomeOutlined, SettingOutlined, PieChartOutlined, DesktopOutlined, ContainerOutlined, TeamOutlined, ForkOutlined } from '@ant-design/icons';
import './index.scss';

class LeftMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      menuConfig: [
        { name: '后台首页', icon: <HomeOutlined />, route: '/index', },
        { name: '网站设置', icon: <SettingOutlined />, route: '', },
        { name: '新建文章', icon: <PieChartOutlined />, route: '', },
        { name: '文章管理', icon: <DesktopOutlined />, route: '', },
        { name: '用户管理', icon: <TeamOutlined />, route: '', },
        { name: '主题管理', icon: <ContainerOutlined />, route: '', },
        { name: '友链管理', icon: <ForkOutlined />, route: '/blogroll', }
      ]
    }
  }

  toggleCollapsed = () => {
    const { collapsed } = this.state
    this.setState({
      collapsed: !collapsed,
    })
  }

  goRoute = (route) => {
    this.props.history.push(route)
  }

  render() {
    const { collapsed, menuConfig } = this.state
      , { toggleCollapsed, goRoute } = this
    return (
      <div className="left-menu">
        <div className="control" onClick={ toggleCollapsed }>
          <img src={ require('../../assets/img/logo.png') } alt="" className="logo"/>
        </div>
        <Menu mode="inline" inlineCollapsed={ collapsed } >
          {menuConfig.map((item, index) => {
            return <Menu.Item key={ index } icon={ item.icon } onClick={ () => goRoute(item.route) }>
              { item.name }
            </Menu.Item>
          })}
        </Menu>
      </div>
    )
  }
}

export default withRouter(LeftMenu);