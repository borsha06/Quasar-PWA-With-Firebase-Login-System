<template>
  <q-page padding>
    <q-page padding class="">
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
        @blur="$v.form.email.$touch"
        :error="$v.form.email.$error"
        helper="Enter your registered email address to Sign Up"
        error-label="Please type a valid email address"
        >
        <q-input
        type="email"
        v-model="form.email"></q-input>
        </q-field>
          <q-field
            icon="phone"
            label="Mobile"
            label-width= 3
            :error="$v.form.email.$error"
            helper="Enter your Mobile number"
            error-label="Please type a valid mobile address"
          >
            <q-input
              type="text"
              v-model="form.phone"></q-input>
          </q-field>
        <q-field
        icon="vpn_key"
        label="Password"
        label-width= 3
        helper="Enter your password"
        :error="$v.form.email.$error"
        error-label="Please type a valid password"
        >
        <q-input
        type="password"
        v-model="form.password"></q-input>
        </q-field>
          <q-field
            icon="vpn_key"
            label="RePassword"
            label-width= 3
            helper="Enter your password again"
            :error="$v.form.email.$error"
            error-label="Please type a valid password"
          >
            <q-input
              type="password"
              v-model="form.retypePassword"></q-input>
          </q-field>
        </q-card-main>
        <q-card-separator />
        <q-card-actions align="center">
          <q-btn color="primary" align="center" label="Sign Up" v-on:click="submit()"></q-btn>
        </q-card-actions>
      </q-card>
    </q-page>
    <transition
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated bounceOutRight"
      appear
    >
      <q-alert
        v-if="visible"
        color="secondary"
        icon="cloud"
        appear
        :actions="[{ label: 'Dismiss', handler: () => { visible = false } }]"
        class="q-mb-sm"
      >
       You have created an account
      </q-alert>
    </transition>
  </q-page>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      form: {
        email: '',
        phone: '',
        password: '',
        retypePassword: ''
      },
      visible: false
    }
  },
  validations: {
    form: {
      email: { required, email },
      password: { required }
    }
  },
  methods: {
    submit () {
      this.$v.form.$touch()
      var email = this.form.email
      var password = this.form.password
      if (password === this.form.retypePassword) {
        this.$auth.createUserWithEmailAndPassword(email, password).then(() => {
          this.$q.notify({
            // only required parameter is the message:
            message: `You have Successfully created an account`,

            /*
           * All parameters below are optional:
           */

            timeout: 3000, // in milliseconds; 0 means no timeout

            // "type" adds a color and icon,
            // so you don't need to specify them.
            // Available values: 'positive', 'negative', 'warning', 'info'
            type: 'positive',
            position: 'top-right',
            actions: [
              {

                label: 'Dismiss',
                handler: () => {
                  console.log('dismissed')
                }
              }]
          })
          window.location = '#/signin'
        })
          .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code
            var errorMessage = error.message
            if (errorCode === 'auth/weak-password') {
              alert('The password is too weak.')
            } else {
              alert(errorMessage)
            }
            console.log(error)
          })
      } else {
        this.$q.notify({
          // only required parameter is the message:
          message: `Passwords didnot matched`,

          /*
         * All parameters below are optional:
         */

          timeout: 3000, // in milliseconds; 0 means no timeout

          // "type" adds a color and icon,
          // so you don't need to specify them.
          // Available values: 'positive', 'negative', 'warning', 'info'
          type: 'negative',
          icon: 'warning',
          position: 'top-right',
          actions: [
            {

              label: 'Dismiss',
              handler: () => {
                console.log('dismissed')
              }
            }]
        })
      }
    }
  }
}

</script>

<style>
</style>
