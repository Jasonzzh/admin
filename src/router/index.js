import Home from '../pages/index'
import Login from '../pages/login'
import Index from '../pages/index/index'
import UserManage from '../pages/userManage'
import Blogroll from '../pages/blogroll'

const routes = [
    {
        path: '/login',
        component: Login,
        description: '登录',
    },
    {
        path: '/',
        component: Home,
        description: '主页',
        subs: [
            { path: '/index', component: Index, description: '主页' },
            {
                path: '/userManage',
                component: UserManage,
                description: '用户管理',
            },
            { path: '/blogroll', component: Blogroll, description: '友链管理' },
        ],
    },
]

export default routes
