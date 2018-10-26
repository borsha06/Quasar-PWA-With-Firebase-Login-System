// import something here
import * as firebase from 'firebase'
// leave the export, even if you don't use it

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyABxiLnyi6KG936dGtKAlbnqJjXu2b_j18',
  authDomain: 'syndicateapp-4e18d.firebaseapp.com',
  databaseURL: 'https://syndicateapp-4e18d.firebaseio.com',
  projectId: 'syndicateapp-4e18d',
  storageBucket: 'syndicateapp-4e18d.appspot.com',
  messagingSenderId: '1038909489969'
}

const fireApp = firebase.initializeApp(config)
export const AUTH = fireApp.auth()

export default ({ app, router, Vue }) => {
  Vue.prototype.$auth = AUTH
  // something to do
}
