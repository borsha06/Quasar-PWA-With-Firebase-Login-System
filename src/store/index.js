import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import shared from './shared'

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
    //  example
      user: user,
      shared: shared
    }
  })

  return Store
}
