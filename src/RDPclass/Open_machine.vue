<template>
  <v-col justify="center" align="center">
    <v-btn
      color="pink"
      dark
      top
    >
      點擊開啟機器
      <v-icon>
        mdi-login
      </v-icon>
    </v-btn>
  </v-col>
</template>

<script>
  export default {
    data: () => ({
      isActive: 'true',
      Username: '',
      Auth:'',
      links: [],
    }),
    methods:{
    },
    mounted: function(){
    }
  }
</script>