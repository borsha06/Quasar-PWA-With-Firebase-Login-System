<!--<template>-->
  <!--<q-layout view="lHh Lpr lFf">-->
    <!--<q-layout-header>-->
      <!--<q-toolbar color="primary">-->
        <!--<q-toolbar-title>-->
          <!--Out of Time Color Picker-->
          <!--<div slot="subtitle">-->
            <!--Running on Quasar v{{ $q.version }}-->
          <!--</div>-->
        <!--</q-toolbar-title>-->
      <!--</q-toolbar>-->
    <!--</q-layout-header>-->
    <!--<q-page-container>-->
      <!--<calendar />-->
      <!--<q-icon name="alarm" />-->
    <!--</q-page-container>-->
  <!--</q-layout>-->
<!--</template>-->
<!--<script>-->
<!--import { colors } from 'quasar'-->
<!--import { Calendar } from 'quasar-calendar'-->
<!--export default {-->
  <!--components: {-->
    <!--Calendar-->
  <!--},-->
  <!--data: () => ({-->
    <!--modelHex: '#C7044B'-->
  <!--}),-->
  <!--watch: {-->
    <!--modelHex: {-->
      <!--handler (val, oldVal) {-->
        <!--colors.setBrand('primary', val)-->
      <!--},-->
      <!--immediate: true-->
    <!--}-->
  <!--},-->
  <!--methods: {-->
    <!--doSomething: function () {-->
      <!--alert('h')-->
    <!--}-->
  <!--}-->
<!--}-->
<!--</script>-->
<!--<template>-->
<!--<q-toolbar>-->
<!--<q-btn-->
<!--flat-->
<!--@click="openDrawer()"-->
<!--&gt;-->
<!--<q-icon name="menu" />-->
<!--</q-btn>-->
<!--<q-toolbar-title> Lean Web App Tools-->
<!--<div slot="subtitle">Tools to Improve your Lean Thinking</div>-->
<!--</q-toolbar-title>-->
<!--</q-toolbar>-->
<!--</template>-->
<!--plate>-->
<!--Javascript-->

<!--<script>-->
<!--import {QToolbar, QToolbarTitle, QBtn, QIcon, Events} from 'quasar'-->
<!--export default {-->
<!--name: 'toolbar',-->
<!--components: {-->
<!--QToolbar,-->
<!--QToolbarTitle,-->
<!--QBtn,-->
<!--QIcon,-->
<!--Events-->
<!--},-->
<!--methods: {-->
<!--openDrawer () {-->
<!--Events.$emit('openDrawer', true)-->
<!--}-->
<!--}-->
<!--}-->
<!--<template id="myl">-->
  <!--<div>-->
    <!--<p>h</p>-->
    <!--<q-input-->
      <!--v-model="form.email"-->
      <!--@blur="$v.form.email.$touch"-->
      <!--@keyup.enter="submit"-->
      <!--:error="$v.form.email.$error">-->
    <!--</q-input>-->
    <!--&lt;!&ndash; Single Line Input &ndash;&gt;-->
    <!--<q-input v-model="text" />-->
    <!--<q-input v-model="text" stack-label="Stack Label" />-->
    <!--<q-input v-model="text" float-label="Float Label" placeholder="Gigi"></q-input>-->

    <!--&lt;!&ndash; Multiple Line Input &ndash;&gt;-->
    <!--<q-input-->
      <!--v-model="area"-->
      <!--type="textarea"-->
      <!--float-label="Textarea"-->
      <!--:max-height="100"-->
      <!--rows="7"></q-input>-->
    <!--<q-btn color="primary" @click="submit">Submit</q-btn>-->
  <!--</div>-->
<!--</template>-->
<template>
  <!--<q-page padding class="docs-input row justify-center">-->
  <div class="mainpageDiv">
    <q-input
      v-model="form.email"
      @blur="$v.form.email.$touch"
      @keyup.enter="submit"
      :error="$v.form.email.$error"
      float-label="Email">
    </q-input>
    <q-input v-model="form.password" type="password" max-length="16" float-label="Password" @keyup.enter="submit"></q-input>
    <br>
    <q-btn color="primary" @click="submit" >Submit</q-btn>

  <router-link class="absolute-center" to="/login">Login</router-link>
  </div>
  <!--</q-page>-->
</template>

<script>

import { required, email } from 'vuelidate/lib/validators'

export default {
  components: {
    required, email
  },
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  validations: {
    form: {
      email: { required, email }
    }
  },
  methods: {
    submit () {
      this.$v.form.$touch()

      if (this.$v.form.$error) {
        this.$q.notify('Please review fields again.')
      } else {
        this.$router.push('/login')
      }

      // ...
    }
  }
}
</script>

<style>
  .mainpageDiv{
    width:90%;
    margin:auto;
  }
</style>
