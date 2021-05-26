import React, { Component } from 'react'
import { Table, Tag, Space, Input, Switch, Button } from 'antd'
import './index.scss'
const { Search } = Input

const columns = [
    {
        title: '博客名',
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => (
            <a href={record.address} target="_blank" rel="noopener noreferrer">
                {text}
            </a>
        ),
    },
    {
        title: '博客地址',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '博主邮箱',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: '标签',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green'
                    if (tag === 'loser') {
                        color = 'volcano'
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    )
                })}
            </>
        ),
    },
    {
        title: '显示',
        key: 'isShow',
        dataIndex: 'isShow',
        render: (isShow, record) => (
            <Switch
                checkedChildren="开启"
                unCheckedChildren="关闭"
                defaultChecked={isShow}
            />
        ),
    },
    {
        title: '操作',
        key: 'action',
        render: (text, record) => (
            <Space size="small">
                <Button type="primary" size="small">
                    修改
                </Button>
                <Button danger type="primary" size="small">
                    删除
                </Button>
            </Space>
        ),
    },
]

const data = [
    {
        key: '1',
        name: '杨青个人博客',
        email: '987354940@qq.com',
        address: 'http://www.yangqq.com/',
        tags: ['nice', 'developer'],
        isShow: true,
    },
    {
        key: '2',
        name: '肖战飞个人博客',
        email: '987354940@qq.com',
        address: 'http://www.xiaozhanfei.com/',
        tags: ['loser'],
        isShow: true,
    },
    {
        key: '3',
        name: '江西SEO',
        email: '987354940@qq.com',
        address: 'http://www.zwtseo.cn/',
        tags: ['cool', 'teacher'],
        isShow: false,
    },
    {
        key: '3',
        name: '江西SEO',
        email: '987354940@qq.com',
        address: 'http://www.zwtseo.cn/',
        tags: ['cool', 'teacher'],
        isShow: true,
    },
    {
        key: '3',
        name: '江西SEO',
        email: '987354940@qq.com',
        address: 'http://www.zwtseo.cn/',
        tags: ['cool', 'teacher'],
        isShow: true,
    },
    {
        key: '3',
        name: '江西SEO',
        email: '987354940@qq.com',
        address: 'http://www.zwtseo.cn/',
        tags: ['cool', 'teacher'],
        isShow: true,
    },
    {
        key: '3',
        name: '江西SEO',
        email: '987354940@qq.com',
        address: 'http://www.zwtseo.cn/',
        tags: ['cool', 'teacher'],
        isShow: true,
    },
    {
        key: '3',
        name: '江西SEO',
        email: '987354940@qq.com',
        address: 'http://www.zwtseo.cn/',
        tags: ['cool', 'teacher'],
        isShow: true,
    },
]

class Blogroll extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="blog-contain">
                <div className="search">
                    <Search
                        placeholder="输入关键字查询"
                        onSearch={value => console.log(value)}
                        enterButton
                    />
                </div>
                <div className="table">
                    <Table
                        columns={columns}
                        dataSource={data}
                        scroll={{ y: 420 }}
                    />
                </div>
            </div>
        )
    }
}

export default Blogroll
