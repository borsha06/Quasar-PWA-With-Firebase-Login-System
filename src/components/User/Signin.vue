<template>
    <!--<img alt="Quasar logo" src="~assets/quasar-logo-full.svg">-->
    <!--<app-alert @dismissed="onDismissed" :text="error.message"></app-alert>-->
    <q-card>
      <div id="recaptcha-container"></div>
      <q-card-title>
        Already a user? Sign In To DanceApp!
      </q-card-title>
      <q-card-separator/>
      <q-card-main>

        <q-field
          name="email"
          label="Email"
          id="email"
          type="email"
          required
        >
          <q-input
            type="email"
            v-model="email"></q-input>
        </q-field>

        <q-field
          name="password"
          label="Password"
          id="pass"
          required
        >
          <q-input
            type="password"
            v-model="password"></q-input>
        </q-field>

      </q-card-main>
      <q-card-separator/>
      <q-card-actions align="center">
        <q-btn color="primary" align="center" label="Sign In" v-on:click="onSignin()" :disabled="loading" :loading="loading"></q-btn>
      </q-card-actions>
      <div class="text-xs-center row justify-center">
        <q-btn  color="primary" dark :disabled="loading" :loading="loading" @click.prevent="onSigninFacebook">Login with Facebook
          <span slot="loader" class="custom-loader">
        <q-icon light>cached</q-icon>
       </span>
        </q-btn>
      </div>
      <br>
    </q-card>
</template>

<script>
import Vue from 'vue'
const AlertCmp = () => import('../Shared/Alert.vue')
Vue.component('app-alert', AlertCmp)

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    error () {
      return this.$store.getters.error
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/profile')
      }
    }
  },
  methods: {
    onSignin () {
      this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
    },
    onSigninFacebook () {
      this.$store.dispatch('signUserInFacebook')
    },

    onResetPassword () {
      if (this.email === '') {
        return this.$store.dispatch('setError', {message: 'Email can not be blnak'})
      }
      this.$store.dispatch('resetPasswordWithEmail', {email: this.email})
    },
    onDismissed () {
      this.$store.dispatch('clearError')
    }
  }
}
</script>
