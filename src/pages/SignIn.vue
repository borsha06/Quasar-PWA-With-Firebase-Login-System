<!--<template>-->
  <!--<q-page padding>-->
    <!--<q-page padding class="">-->
      <!--<q-card >-->
        <!--<q-card-title>-->
          <!--Already a user? Sign In To DanceApp!-->
        <!--</q-card-title>-->
        <!--<q-card-separator />-->
        <!--<q-card-main>-->
          <!--<q-field-->
            <!--icon="mail"-->
            <!--label="Email"-->
            <!--label-width= 3-->
            <!--@blur="$v.form.email.$touch"-->
            <!--:error="$v.form.email.$error"-->
            <!--helper="Enter your registered email address to Log in"-->
            <!--error-label="Please type a valid email address"-->
          <!--&gt;-->
            <!--<q-input-->
              <!--type="email"-->
              <!--v-model="form.email"></q-input>-->
          <!--</q-field>-->
          <!--<q-field-->
            <!--icon="vpn_key"-->
            <!--label="Password"-->
            <!--label-width= 3-->
            <!--helper="Enter your password"-->
            <!--:error="$v.form.email.$error"-->
            <!--error-label="Please type a valid password"-->
          <!--&gt;-->
            <!--<q-input-->
              <!--type="password"-->
              <!--v-model="form.password"></q-input>-->
          <!--</q-field>-->
        <!--</q-card-main>-->
        <!--<q-card-separator />-->
        <!--<q-card-actions align="center">-->
          <!--<q-btn color="primary" align="center" label="Sign In" v-on:click="submit()"></q-btn>-->
        <!--</q-card-actions>-->
      <!--</q-card>-->
    <!--</q-page>-->

  <!--</q-page>-->
<!--</template>-->

<!--<script>-->
<!--import { required, email } from 'vuelidate/lib/validators'-->

<!--export default {-->
  <!--data () {-->
    <!--return {-->
      <!--form: {-->
        <!--email: '',-->
        <!--password: ''-->
      <!--}-->
    <!--}-->
  <!--},-->
  <!--validations: {-->
    <!--form: {-->
      <!--email: { required, email },-->
      <!--password: { required }-->
    <!--}-->
  <!--},-->
  <!--methods: {-->
    <!--submit () {-->
      <!--this.$v.form.$touch()-->
      <!--var email = this.form.email-->
      <!--var password = this.form.password-->
      <!--this.$auth.signInWithEmailAndPassword(email, password).then(() => {-->
        <!--window.location = '#/welcome'-->
      <!--}).catch(function (error) {-->
        <!--alert({-->
          <!--title: 'Error',-->
          <!--message: error-->
        <!--})-->
      <!--})-->
      <!--// this.$store.dispatch('user/login', {-->
      <!--//   email: this.form.email,-->
      <!--//   password: this.form.password,-->
      <!--//   strategy: 'local'-->
      <!--// }).then(() => {-->
      <!--//-->
      <!--// })-->
    <!--}-->
  <!--}-->
<!--}-->

<!--</script>-->

<!--<style>-->
<!--</style>-->

<template>
  <q-page class="flex flex-center">
    <!--<img alt="Quasar logo" src="~assets/quasar-logo-full.svg">-->
    <q-card>
      <div id="recaptcha-container"></div>
      <q-card-title>
        Already a user? Sign In To DanceApp!
      </q-card-title>
      <q-card-separator/>
      <q-card-main>

        <q-field
          label="Number"
          label-width=3
          helper="Enter your registered email address to Log in"
          error-label="Please type a valid email address"
        >
          <q-input
            type="text"
            v-model="number"></q-input>
        </q-field>

      </q-card-main>
      <q-card-separator/>
      <q-card-actions align="center">
        <q-btn color="primary" align="center" label="Sign In" v-on:click="submit()"></q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<style>
</style>

<script>import firebase from 'firebase'

// import swal from 'sweetalert2'

export default {
  name: 'PageIndex',
  data () {
    return {
      number: '',
      code: ''
    }
  },
  mounted () {
    // const self = this
    // Start Firebase invisible reCAPTCHA verifier

  },
  methods: {
    submit () {
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
        // size: 'invisible',
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // self.sendSMS()
          console.log(response)
          const phoneNumberString = this.number
          // .toString()
          console.log(typeof (phoneNumberString))
          console.log(phoneNumberString)
          firebase.auth().signInWithPhoneNumber(phoneNumberString, window.recaptchaVerifier).then(function (confirmationResult) {
            window.confirmationResult = confirmationResult
            var verificationCode = window.prompt('Please enter the verification ')
            console.log(verificationCode)
            // '941193
            confirmationResult.confirm(verificationCode).then(function (result) {
              var credential = firebase.auth.PhoneAuthProvider.credential(confirmationResult.verificationId, verificationCode)
              firebase.auth().signInAndRetrieveDataWithCredential(credential)
              var user = result.user
              console.log(user)
            })
          })
            .catch(function (error) {
              console.log(error)
            })
        }
      })
      window.recaptchaVerifier.render()
      // window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container'){
      // const phoneNumberString = this.form.number
      // firebase.auth().signInWithPhoneNumber(phoneNumberString, window.recaptchaVerifier)
      //   .then(function (confirmationResult) {
      //     var verificationCode = window.prompt('Please enter the verification ' +
      //       'code that was sent to your mobile device.')
      //     return confirmationResult.confirm(verificationCode).then(function (result) {
      //       var user = result.user
      //       console.log(user)
      //     })
      //   })
      //   .catch(function (error) {
      //     console.log(error)
      // Handle Errors here.
      // swal({
      //   input: 'text',
      //   showCancelButton: true,
      //   closeOnConfirm: false,
      //   animation: 'slide-from-top',
      //   inputPlaceholder: 'User'
      // }).then(function (value) {
      //   // console.log(value)
      //   // if (value === false) return false
      //   // if (value === '') {
      //   //   swal('Error')
      //   //   return false
      //   // } else {
      //   console.log(value)
      //   confirmationResult.confirm(value)
      //     .then(function (result) {
      //       console.log(result)
      //       alert('hell')
      //       console.log(result)
      //       var user = result.user
      //       console.log(user)
      //     })
      //   // }
      // })

      // var myFunction = function () {
      //     window.confirmationResult.confirm(document.getElementById("verificationcode").value).then(function (result) {
      //         console.log(result);
      //     }, function (error) {
      //       console.log(error);
      //     });
      // };
      // })
    }
  }
}
</script>
