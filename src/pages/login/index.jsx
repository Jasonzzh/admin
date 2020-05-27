import React, { Component } from 'react';
import { Input, Checkbox, Button, Alert } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { req } from '../../assets/js/req.js';
import api from './api.js';
import './index.scss';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      submitLoading: false,
      message: '',
      type: 'error'
    }
  }

  remember = (e) => {
    console.log(e)
  }

  // 账号输入
  usnChange = (e) => {
    const { value } = e.target
    this.setState({
      userName: value
    })
  }

  // 密码输入
  pwdChange = (e) => {
    const { value } = e.target
    this.setState({
      password: value
    })
  }

  // 登录
  login = async () => {
    if (!this.isCheck()) return
    this.setState({
      submitLoading: true
    })
    const { userName, password } = this.state
      , params = {
        iphone: userName,
        password,
      }
    try {
      const res = await req(api.login, params)
      if (res.code === 200) {
        this.setState({
          message: res.msg,
          submitLoading: false,
          type: 'success'
        })
        this.saveUser(res.data)
        this.props.history.push('/index')
      } else {
        this.setState({
          message: res.msg,
          submitLoading: false,
          type: 'error'
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  // 保存用户
  saveUser = (data) => {
    const blogUser = JSON.stringify(data)
    sessionStorage.setItem('blogUser', blogUser)
  }

  // 用户名、密码校验
  isCheck = () => {
    const { userName, password } = this.state
    if (!userName) {
      this.setState({
        message: '用户名不能为空！',
        submitLoading: false,
      })
      return false
    } else if (!password) {
      this.setState({
        message: '请输入密码',
        submitLoading: false,
      })
      return false
    }
    return true
  }

  render() {
    const { remember, login, usnChange, pwdChange } = this
      , { userName, password, submitLoading, message, type } = this.state
    return (
      <div className="login">
        <div className="content">
          <img src={require('../../assets/img/login/pic.png')} alt="" className="pic"/>
          <div className="form">
            <Alert message={ message } type={ type } showIcon  className={ !message ? 'hide' : ''}/>
            <Input placeholder="UserName" onChange={ usnChange } value={ userName } prefix={<UserOutlined />} />
            <Input.Password placeholder="Password" value={ password } onChange={ pwdChange } prefix={<LockOutlined />} />
            <Checkbox onChange={ remember }>Remember Me</Checkbox>
            <Button type="primary" block onClick={ login } loading={ submitLoading }>Login</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;