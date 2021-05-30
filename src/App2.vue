<template>
  <v-app id="idserver">
    <v-system-bar app height="50" dark color="teal accent-4">
      <v-toolbar-title class="headline white--text">
        IDserver
      </v-toolbar-title>
      <!-- 手機板三條線 -->
      <v-app-bar-nav-icon v-on:click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn v-if="isActive" elevation="2" medium @click="logout">
        登出
        <v-icon>
          mdi-logout
        </v-icon>
      </v-btn>
    </v-system-bar>
    
    <v-navigation-drawer v-model="drawer" app dark>
      <v-sheet  class="pa-4"  color="grey darken-3">
        <v-avatar class="mb-4" color="grey darken-1" size="64"></v-avatar>
        <div class="headline">User: {{ Username }}</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item-group>
          <v-list-item v-for="[icon, text, link] in links" :key="icon" :to="link" link>
            <v-list-item-icon>
              <v-icon>{{ icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ text }}</v-list-item-title>
            </v-list-item-content>
            
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  
    <v-main>
     <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      isActive: true,
      Username: '',
      Auth: '',
      drawer: null,
      content:"",
      links: [],
    }),
    methods:{
      logout(){
        localStorage.clear();
        this.$router.push('/');
      }
    },
    mounted: function(){
      this.Username = localStorage.getItem('Username');
      this.Auth = localStorage.getItem('Gid');
      if( this.Auth == 1001){
        this.links = [
          ['mdi-clipboard-edit', '修改資料','/Admin/modify'],
          ['mdi-clipboard-text-search', '使用者查詢','/Admin/search'],
          ['mdi-desktop-tower', 'Server資訊','/Admin/info'],
          ['mdi-account-multiple-plus', '連續建立使用者','/Admin/C_adduser'],
          ['mdi-account-multiple-plus-outline', '批次建立使用者','/Admin/B_adduser'],
        ];
      }else if( this.Auth == 1002){
        this.links = [
          ['mdi-clipboard-edit', '修改資料','/Admin/modify'],
          ['mdi-clipboard-text-search', '使用者查詢','/Admin/search'],
          ['mdi-desktop-tower', 'Server資訊','/Admin/info'],
          ['mdi-account-multiple-plus', '連續建立使用者','/Admin/C_adduser'],
          ['mdi-account-multiple-plus-outline', '批次建立使用者','/Admin/B_adduser'],
        ];
      }else if( this.Auth == 1003){
        this.links = [
          ['mdi-clipboard-edit', '修改資料','/Admin/modify'],
          ['mdi-clipboard-text-search', '使用者查詢','/Admin/search'],
          ['mdi-desktop-tower', 'Server資訊','/Admin/info'],
          ['mdi-account-multiple-plus', '連續建立使用者','/Admin/C_adduser'],
          ['mdi-account-multiple-plus-outline', '批次建立使用者','/Admin/B_adduser'],
        ];
      }
    }
  }
</script>