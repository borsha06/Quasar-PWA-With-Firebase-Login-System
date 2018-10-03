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
<template>
  <div>
    <q-input
      v-model="form.email"
      @blur="$v.form.email.$touch"
      @keyup.enter="submit"
      :error="$v.form.email.$error"
    />
    <q-btn color="primary" @click="submit">Submit</q-btn>
  </div>
</template>
<script>

import { required, email } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      form: {
        email: ''
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
      }

      // ...
    }
  }
}
</script>
