<template>
  <q-page class="flex flex-center">
    <div class="mainpageDiv">
      <!--<q-input-->
        <!--v-model="form.email"-->
        <!--@blur="$v.form.email.$touch"-->
        <!--@keyup.enter="submit"-->
        <!--:error="$v.form.email.$error"-->
        <!--float-label="Email">-->
      <!--</q-input>-->
      <!--<div class="form-group" :class="{ 'form-group&#45;&#45;error': $v.password.$error }">-->
        <!--<label class="form__label">Password</label>-->
        <!--<input class="form__input" v-model.trim="$v.password.$model"/>-->
      <!--</div>-->
      <!--<div class="error" v-if="!$v.password.required">Password is required.</div>-->
      <!--<div class="error" v-if="!$v.password.minLength">Password must have at least {{ $v.password.$params.minLength.min }} letters.</div>-->
      <!--<div class="form-group" :class="{ 'form-group&#45;&#45;error': $v.repeatPassword.$error }">-->
        <!--<label class="form__label">Repeat password</label>-->
        <!--<input class="form__input" v-model.trim="$v.repeatPassword.$model"/>-->
      <!--</div>-->
      <!--<div class="error" v-if="!$v.repeatPassword.sameAsPassword">Passwords must be identical.</div>-->
      <!--<tree-view :data="$v" :options="{rootObjectKey: '$v', maxDepth: 2}"></tree-view>-->

      <!--<br>-->
      <q-btn color="primary" @click="submit">Submit</q-btn>
    </div>
  </q-page>
</template>

<style>
</style>

<script>

import { required, email, sameAs } from 'vuelidate/lib/validators'
export default {
  name: 'PageIndex',
  components: { required, email, sameAs },
  data () {
    return {
      form: {
        email: '',
        password: '',
        repeatPassword: ''
      }
    }
  },
  validations: {
    form: {
      email: { required, email },
      password: { required },
      repeatPassword: {
        sameAsPassword: sameAs('password')
      }
    }
  },
  methods: {
    submit () {
      this.$v.form.$touch()

      if (this.$v.form.$error) {
        this.$q.notify('Please review fields again.')
      }

      // ...
    }
  }
}
</script>
