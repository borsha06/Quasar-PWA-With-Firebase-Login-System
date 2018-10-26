<template>
  <q-alert :actions="[{label: 'Snooze', handler () {}}]" @input="onClose" :value="true">
    {{ text }}
  </q-alert>
</template>

<script>
export default {
  props: ['text'],
  methods: {
    onClose () {
      this.$emit('dismissed')
    }
  }
}
</script>
