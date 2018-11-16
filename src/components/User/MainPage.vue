<template>
  <div class="text-center">
    <h1>Hello {{ name }}</h1>
    <p v-if ="this.profession === 'Instructor'">
    You are an {{profession}}
    </p>
    <p v-else-if="this.profession === 'Choreographer'">
      You are a {{profession}}
    </p>
    <img :src="proPic" width="100px" height="100px"/>
    <br>
    About Me {{ about_me_ }}
  </div>
</template>
<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      name: '',
      profession: '',
      proPic: '',
      about_me_: ''
    }
  },
  beforeCreate () {
    let self = this
    var userId = firebase.auth().currentUser.uid
    console.log(userId)
    return firebase.database().ref('/users/' + userId).once('value').then(function (snapshot) {
      console.log(snapshot)
      self.name = (snapshot.val() && snapshot.val().username) || 'Anonymous'
      self.profession = (snapshot.val() && snapshot.val().select)
      self.proPic = (snapshot.val() && snapshot.val().profile_picture)
      self.about_me_ = (snapshot.val() && snapshot.val().about_me)
      // console.log(this.name)
      // ...
    })
  }

}
</script>
