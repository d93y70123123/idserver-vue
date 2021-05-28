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
            批次建立使用者
          </h3>
          <br />
        </v-col>
      </v-row>
    </v-row>

    <v-card>
      <p>輸入帳號並用空白或段行隔開，EX:4990C0XX 4990C0XX ....</p>
      <v-container fluid>
        <v-textarea
          clearable
          clear-icon="mdi-close-circle"
          label="輸入帳號："
          placeholder="輸入帳號並用空白或段行隔開，EX:4990C0XX 4990C0XX ...."
        ></v-textarea>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      value: 'Hello!',
    }),
    methods:{
    },
  }
</script>