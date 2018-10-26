// import User from 'layouts/User'
// import Signup from 'pages/SignUp'
// import Signin from 'pages/SignIn'
// import Welcome from 'pages/welcome'
const Home = () => import('../components/common')
const Profile = () => import('../components/User/Profile')
const Signup = () => import('../components/User/Signup')
const Signin = () => import('../components/User/Signin')
import AuthGuard from './auth-guard'
// const routes = [
//   {
//     path: '/',
//     component: () => import('pages/welcome.vue')
//     // children: [
//     //   { path: '', component: () => import('pages/Index.vue') }
//     // ]
//   }
// ]
const routes = [
  // {
  //   path: '/',
  //
  //   // we use /src/layouts/User component which is imported above
  //   component: User,
  //
  //   // hey, it has children routes and User has <router-view> in it;
  //   // It is really a Layout then!
  //   children: [
  //     // Profile page
  //     {
  //       path: 'signup', // here it is, route /user/profile
  //       component: Signup// we reference /src/pages/SignUp.vue imported above
  //     },
  //
  //     // Posts page
  //     {
  //       path: 'signin', // here it is, route /user/posts
  //       component: Signin // we reference /src/pages/SignIn.vue imported above
  //     },
  //     {
  //       path: 'welcome', // here it is, route /user/posts
  //       component: Welcome // we reference /src/pages/SignIn.vue imported above
  //     }
  //   ]
  // }

  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: AuthGuard
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  }]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
