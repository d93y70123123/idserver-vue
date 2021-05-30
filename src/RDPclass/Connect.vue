<template>
  <v-app id="RDPclass">
    <v-app-bar app dark color="teal accent-4" flat>
      <div class="headline white--text">
        IDserver
      </div>
      <v-tabs centered class="ml-n9">
        <v-tab v-for="link in links" :key="link">
          {{ link }}
        </v-tab>
      </v-tabs>
      <v-btn v-if="isActive" elevation="2" medium @click="logout">
        登出
        <v-icon>
          mdi-logout
        </v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268">
              身分資訊
              <p>使用者: {{Username}}</p>
              <p>權限為: {{Auth}}</p>
            </v-sheet>
          </v-col>
          
          <v-col cols="12" sm="8">
            <v-sheet min-height="70vh" rounded="lg">
              <router-view></router-view>
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268">
              目前登入人數：{{number}}
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      isActive: 'true',
      Username: '',
      Auth:'',
      links: [],
      number: '123',
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
        this.Auth = '學生';
        this.links= [
          '開啟機器',
          '修改資料',
          '設定連線資訊',
        ];
      }else if( this.Auth == 1002){
        this.Auth = '老師';
        this.links= [
          '開啟機器',
          '設定權限',
          '修改資料',
          '設定連線資訊',
        ];
      }else if( this.Auth == 1003){
        this.Auth = '管理員';
        this.links= [
          '開啟機器',
          '設定權限',
          '修改資料',
          '設定連線資訊',
        ];
      }
    }
  }
</script>