<template>
  <v-app>
    <v-content >  <!--Lo que contiene todo y el Color de fondo-->
      <router-view />                             <!--Cambiar entre vstas-->
    </v-content>

  </v-app>
</template>
<script>
export default {
  name: "App",

  components: {},
}
</script>
