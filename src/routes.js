import Home from './pages/Home/Home'
import City from './pages/City/City'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

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
  }
]

export default routes