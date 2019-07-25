import Home from './pages/Home/Home'
import Stream from './pages/Stream/Stream'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import User from './pages/User/User'
import Qualauth from './pages/Qualauth/Qualauth'
import Union from './pages/Union/Union'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/stream',
    name: 'Stream',
    component: Stream
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/qualauth',
    name: 'Qualauth',
    component: Qualauth
  },
  {
    path: '/union',
    name: 'Union',
    component: Union
  }
]

export default routes
