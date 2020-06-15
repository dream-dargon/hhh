import Loadable from '@@/Loadable'
const Basic = Loadable(() => import('@/layout/Basic'))
const Home = Loadable(() => import('@/pages/home'))
const Login = Loadable(() => import('@/pages/login'))
const Reg = Loadable(() => import('@/pages/reg'))
const List = Loadable(() => import('@/pages/list'))
export {
  Reg,
  Home,
  Login,
  Basic,
  List
}
