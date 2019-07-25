import Home from './pages/Home/Home'
import City from './pages/City/City'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import User from './pages/User/User'
import Qualauth from './pages/Qualauth/Qualauth'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: '/city',
    name: 'City',
    component: City
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
  }
]

export default routes