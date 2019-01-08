<template>
  <v-app>
    <v-navigation-drawer app />
    <v-toolbar app />
    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>
    <v-footer app />
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
</style>
