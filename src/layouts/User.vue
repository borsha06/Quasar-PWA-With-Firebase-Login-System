<template>
  <q-layout> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-layout-header>
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="menu"
          @click="leftDrawer = !leftDrawer"></q-btn>
        <q-toolbar-title>
          <span slot="subtitle">JOIN US</span>
        </q-toolbar-title>
      </q-toolbar>
        <q-tabs>
          <q-route-tab
            slot="title"
            icon="map"
            to="/signup"
            replace
            label="Sign Up"></q-route-tab>
          <q-route-tab
            slot="title"
            icon="assignment"
            to="/signin"
            replace
            label="Sign In"></q-route-tab>
        </q-tabs>

    </q-layout-header>

    <!-- (Optional) The Footer -->
    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-layout-drawer
      side="left"
      v-model="leftDrawer"
    >
      <!--&lt;!&ndash; QScrollArea is optional &ndash;&gt;-->
      <!--<q-scroll-area class="fit q-pa-sm">-->
        <!--&lt;!&ndash; Content here &ndash;&gt;-->
      <!--</q-scroll-area>-->
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
      leftDrawer: true
    }
  }
}
</script>

<style>
</style>
