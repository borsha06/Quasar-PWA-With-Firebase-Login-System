<template>
    <q-card>
      <q-card-title>
        New Here? Sign Up, Please
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        <q-field
          icon="mail"
          label="Email"
          label-width= 3
          helper="Enter your registered email address to Sign Up"
          error-label="Please type a valid email address"
        >
          <q-input
            type="email"
            v-model="email"></q-input>
        </q-field>
        <q-field
          icon="vpn_key"
          label="Password"
          label-width= 3
          helper="Enter your password"
          error-label="Please type a valid password"
        >
          <q-input
            type="password"
            v-model="password"></q-input>
        </q-field>
        <q-field
          icon="vpn_key"
          label="RePassword"
          label-width= 3
          helper="Enter your password again"
          error-label="Please type a valid password"
        >
          <q-input
            type="password"
            v-model="confirmPassword"></q-input>
        </q-field>
      </q-card-main>
      <q-card-separator />
      <q-card-actions align="center">
        <q-btn color="primary" align="center" label="Sign Up" v-on:click="onSignup"></q-btn>
      </q-card-actions>
      <!--<q-card>-->
      <div class="text-xs-center row justify-center">
        <q-btn  color="primary" dark :disabled="loading" :loading="loading" class="text-center" @click.prevent="onSigninFacebook">Login with Facebook
          <span slot="loader" class="custom-loader">
                        <q-icon light>cached</q-icon>
                       </span>
        </q-btn>
      </div>
      <br>
      <!--</q-card>-->
    </q-card>
</template>
<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  computed: {
    // comparePasswords () {
    //   return this.password !== this.confirmPassword ? 'Passwords do not match' : ''
    // },
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
    onSignup () {
      this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
    },
    onSigninGoogle () {
      this.$store.dispatch('signUserInGoogle')
    },
    onSigninFacebook () {
      this.$store.dispatch('signUserInFacebook')
    },
    onSigninGithub () {
      this.$store.dispatch('signUserInGithub')
    },
    onSigninTwitter () {
      this.$store.dispatch('signUserInTwitter')
    },
    onDismissed () {
      this.$store.dispatch('clearError')
    }
  }
}
</script>
