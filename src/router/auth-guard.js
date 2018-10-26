import store from '../store/user'

export default (to, from, next) => {
  if (store.getters.user) {
    next()
  } else {
    next('/signin')
  }
}
