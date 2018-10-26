<template>
  <div id="q-app">
    <q-toolbar dark class="primary">
      <!--<v-toolbar-side-icon-->
        <!--@click.stop="sideNav = !sideNav"-->
        <!--class="hidden-sm-and-up "></v-toolbar-side-icon>-->
      <q-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">Dance App</router-link>
      </q-toolbar-title>
      <!--<v-spacer></v-spacer>-->
      <!--<v-toolbar-items class="hidden-xs-only">-->
        <q-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <!--<q-icon left dark>{{ item.icon }}</q-icon>-->
          {{ item.title }}
        </q-btn>
        <q-btn
          v-if="userIsAuthenticated"
          flat
          @click="onLogout">
          <!--<q-icon left dark>exit_to_app</q-icon>-->
          Logout

        </q-btn>
      <!--</v-toolbar-items>-->
    </q-toolbar>
    <router-view />
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'App',
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
  },
  computed: {
    menuItems () {
      let menuItems = [
        {icon: 'face', title: 'Sign up', link: '/signup'},
        {icon: 'lock_open', title: 'Sign in', link: '/signin'}
      ]
      if (this.userIsAuthenticated) {
        menuItems = [
          {icon: 'person', title: 'Profile', link: '/profile'}
        ]
      }
      return menuItems
    },

    userIsAuthenticated () {
      if (this.$store.getters !== null && this.$store.getters !== undefined) {
        console.log(this.$store.getters.user)
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
      return false
    }
  },

  methods: {
    onLogout () {
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  }
}
</script>

<style>
</style>
