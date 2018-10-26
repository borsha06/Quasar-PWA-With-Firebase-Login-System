<template>
      <q-card>
        <div class="text-center">
            <!--<q-icon large color="green darken-2">check_circle</q-icon>-->
              <h1 class="green--text">Successfully Logged In</h1>
              <h4 class="headline mb-0"><b class="red--text">Name :</b> {{ user.name }}</h4>
              <h4 class="headline mb-0"><b class="red--text">Email :</b> {{ user.email }}</h4>
          </div>
     </q-card>
</template>
<script>
export default {
  computed: {
    user () {
      return this.$store.getters.user
    }
  }
}
</script>
