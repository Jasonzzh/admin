import React, { Component } from 'react';
import { Input, Checkbox, Button } from 'antd';
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
    }
  }

  remember = (e) => {
    console.log(e)
  }

  usnChange = (e) => {
    const { value } = e.target
    this.setState({
      userName: value
    })
  }

  pwdChange = (e) => {
    const { value } = e.target
    this.setState({
      password: value
    })
  }

  login = async () => {
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
      console.log(res)
      if (res.code === 200) {
        this.setState({
          submitLoading: false
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const { remember, login, usnChange, pwdChange } = this
      , { userName, password, submitLoading } = this.state
    return (
      <div className="login">
        <div className="content">
          <img src={require('../../assets/img/login/pic.png')} alt="" className="pic"/>
          <div className="form">
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