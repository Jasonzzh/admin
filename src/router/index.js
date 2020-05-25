import Index from '../pages';
import Login from '../pages/login';
import UserManage from '../pages/userManage';

const routes = [
  {
    path: "/login",
    component: Login,
    description: '登录'
  },
  {
    path: '/',
    component: Index,
    description: '主页',
    subs: [
      { path: '/index', component: Index, description: '主页', },
      { path: "/userManage", component: UserManage, description: '用户管理', },
    ]
  }
];

export default routes;