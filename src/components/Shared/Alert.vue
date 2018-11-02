<template>
  <transition
    enter-active-class="animated bounceInLeft"
    leave-active-class="animated bounceOutRight"
    appear
  >
  <q-alert  v-model="visible" dismissible @input="onClose" ref="destroyableAlert"
            appear
            :actions="[{ label: 'Dismiss', handler: () => { visible2 = false } }]"
            color="secondary"
            class="q-mb-sm"
          >
    {{ text }}
  </q-alert>
  </transition>
</template>

<script>
export default {
  props: ['text'],
  data () {
    return {
      visible: true,
      visible2: true
    }
  },
  methods: {
    onClose () {
      this.$emit('dismissed')
    }
  }
}
</script>
