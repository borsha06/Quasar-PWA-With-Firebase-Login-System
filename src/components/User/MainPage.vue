<template>
  <div class="text-center">
    <h1>Hello {{ name }}</h1>
  </div>
</template>
<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      name: ''
    }
  },
  beforeCreate () {
    let self = this
    var userId = firebase.auth().currentUser.uid
    console.log(userId)
    return firebase.database().ref('/users/' + userId).once('value').then(function (snapshot) {
      console.log(snapshot)
      self.name = (snapshot.val() && snapshot.val().username) || 'Anonymous'
      // console.log(this.name)
      // ...
    })
  }

}
</script>
