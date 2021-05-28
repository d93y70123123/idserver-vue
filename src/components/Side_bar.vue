<template>
    <v-navigation-drawer v-model="drawer" app dark>
        <v-sheet  class="pa-4"  color="grey darken-3">
        <v-avatar class="mb-4" color="grey darken-1" size="64"></v-avatar>
        <div class="headline">User: {{ username }}</div>
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
</template>

<script>
  export default {
    data: () => ({
        name: 'sidebar',
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