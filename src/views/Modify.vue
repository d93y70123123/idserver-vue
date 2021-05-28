<template>
    <!--Navbar/>
    <Sidebar/-->
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
              查詢使用者資料
            </h3>
            <br />
          </v-col>
        </v-row>
      </v-row>
      <v-card>
        <v-form>
          <v-container>
            <v-row>
              <v-col cols="12" md="6" color="white">
                <v-text-field
                  filled
                  label="使用者名稱"
                  color="blue-grey lighten-2"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  filled
                  color="blue-grey lighten-2"
                  label="密碼"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-file-input
              :rules="rules"
              accept="image/png, image/jpeg, image/bmp"
              placeholder="選擇圖片"
              prepend-icon="mdi-camera"
              label="上傳圖片(大小限制:5MB)"
            ></v-file-input>

          </v-container>
        </v-form>

        <v-divider></v-divider>

        <v-card-actions>

          <v-spacer></v-spacer>

          <v-btn color="grey lighten-2" depressed>
            <v-icon left>
              mdi-update
            </v-icon>
              Update Now
          </v-btn>
        </v-card-actions>
        <div id="vueDiv" >
          <input v-if="status" placeholder="輸入姓名" key="userName">
          <input v-else placeholder="輸入mail" key="userEmail">
          <input type="button" value="切換輸入" @click="changeStatus">
        </div>
      </v-card>
    </v-container>
</template>

<script>
  // import Sidebar from '../components/Side_bar'
  // import Navbar from '../components/Nav_bar'
  export default {
    // components: {
    //   Sidebar,
    //   Navbar,
    // },
    data: () => ({
      status: true,
      rules: [
        value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
      ],
    }),
    methods:{
      changeStatus(){
          this.status = !this.status;
      }
    }
  }
</script>