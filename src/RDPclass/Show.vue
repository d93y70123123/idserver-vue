<template>
  <v-col justify="center" align="center">
    <v-btn
      color="pink"
      dark
      top
    >
      機器資訊
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