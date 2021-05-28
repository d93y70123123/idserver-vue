<template>
  <v-container class="py-8 px-6" fluid>
    <v-row>
      <v-col
        class="text-right"
        cols="12"
      >
      </v-col>
      <v-row class="pa-4" align="center" justify="center">
        <v-col class="text-center teal--text teal--accent-4">
          <h3 class="headline">
            LOGIN
          </h3>
          <br />
        </v-col>
      </v-row>
    </v-row>

    <v-card>
      <h1>Login Page</h1>
      <form @submit.prevent="login">
        <label>User Name</label>
        <input type="text" v-model="userName" required>
        <br>
        <label>Password</label>
        <input type="password" v-model="password" required>
        <br>
        <button type="submit">Log In</button>
      </form>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      value: 'Hello!',
      userName: '',
      password: '',
      res:'',
    }),
    methods:{
      login(){
        this.axios
          .get("http://120.114.140.44/config/index.php")
          .then(res=>{  //這裡是ES6的寫法，get請求的地址，是小編自己在網站上存放的php檔案，後面將介紹其編寫，也可以自己定義
            // this.content=res;//獲取資料
            //this.username=res.data;//獲取資料
            console.log(res);
            if( res.data == 1){
              // this.$router.push('/App2');
              localStorage.setItem('accessToken', '123')
              sto=localStorage.getItem('accessToken')
              alert(sto);
            }else{
              alert('login failed')
            }
          })
          .catch(error => {
            console.log(error)
            this.errored = true
          })
          .finally(() => this.loading = false)
      }
    },
  }
</script>