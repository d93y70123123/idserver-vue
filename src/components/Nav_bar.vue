<template>
  <v-system-bar app height="50" dark color="teal accent-4">
      <v-toolbar-title class="headline white--text">
        IDserver
      </v-toolbar-title>
      <!-- 手機板三條線 -->
      <v-app-bar-nav-icon v-on:click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn v-if="isActive" elevation="2" medium>
        登出
        <v-icon>
          mdi-logout
        </v-icon>
      </v-btn>
  </v-system-bar>
</template>

<script>
  export default {
    name: 'navbar',
    data: () => ({
      drawer: null,
      isActive: 'true',
    }),
  };
</script>