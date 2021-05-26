import React, { Component } from 'react'
import {
    ProfileOutlined,
    UserOutlined,
    EyeOutlined,
    CommentOutlined,
} from '@ant-design/icons'
import './index.scss'

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            websiteConfig: [
                {
                    key1: '当前用户',
                    value1: 'admin',
                    key2: '当前版本',
                    value2: '1.5.2',
                },
                {
                    key1: '文章总数',
                    value1: '4522',
                    key2: '分类总数',
                    value2: '3',
                },
                {
                    key1: '管理员数量',
                    value1: '1',
                    key2: '上次登录',
                    value2: '2019-01-01',
                },
                {
                    key1: '评论总数',
                    value1: '345',
                    key2: '浏览总数',
                    value2: '23790',
                },
                {
                    key1: '当前主题',
                    value1: 'default',
                    key2: '主题种类',
                    value2: '12',
                },
                {
                    key1: '服务器IP',
                    value1: '37.109.75.243',
                    key2: '系统环境',
                    value2: 'ubuntu apache1.7 PHP 7.1 MYSQL',
                },
            ],
        }
    }

    render() {
        const { websiteConfig } = this.state
        return (
            <div className="index">
                <div className="title">
                    仪表盘<span>[清缓存]</span>
                </div>
                <div className="census-list">
                    <div className="pageviews">
                        <div className="name">
                            <EyeOutlined /> 浏览总数{' '}
                        </div>
                        <div className="nums">23790</div>
                    </div>
                    <div className="articles">
                        <div className="name">
                            <ProfileOutlined /> 文章总数
                        </div>
                        <div className="nums">4522</div>
                    </div>
                    <div className="comments">
                        <div className="name">
                            <CommentOutlined /> 评论总数
                        </div>
                        <div className="nums">345</div>
                    </div>
                    <div className="users">
                        <div className="name">
                            <UserOutlined /> 用户总数
                        </div>
                        <div className="nums">232</div>
                    </div>
                </div>
                <div className="website">
                    <div className="form">
                        <ul>
                            <li>
                                <div className="title">网站信息</div>
                            </li>
                            {websiteConfig.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <div>{item.key1}</div>
                                        <div>{item.value1}</div>
                                        <div>{item.key2}</div>
                                        <div>{item.value2}</div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="update">
                    最新动态信息<span>[刷新]</span>
                </div>
            </div>
        )
    }
}

export default Index
