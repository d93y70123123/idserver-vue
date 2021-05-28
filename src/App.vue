<template>
  <v-app id="idserver">
    <router-view></router-view>
  </v-app>
</template>

<script>
  export default {
    name: 'app',
    components: {
    },
    data: () => ({
      isActive: true,
      username: '',
      drawer: null,
      content:"",
      links: [
        ['mdi-clipboard-edit', '修改資料','/modify'],
        ['mdi-clipboard-text-search', '使用者查詢','/search'],
        ['mdi-desktop-tower', 'Server資訊','/info'],
        ['mdi-account-multiple-plus', '連續建立使用者','/C_adduser'],
        ['mdi-account-multiple-plus-outline', '批次建立使用者','/B_adduser'],
      ],
    }),
  };
</script>
