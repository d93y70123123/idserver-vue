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
            Server資訊
          </h3>
          <br />
        </v-col>
      </v-row>
    </v-row>

    <v-card>
      <v-toolbar
        color="teal accent-4"
        dark
        flat
      >
          <v-tabs
            v-model="tab"
            align-with-title
          >
            <v-tabs-slider color="yellow"></v-tabs-slider>

            <v-tab
              v-for="item in items"
              :key="item"
            >
              {{ item }}
            </v-tab>
          </v-tabs>
      </v-toolbar>

      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item,index in items"
          :key="item"
        >
          <v-card flat>
            <v-card-text v-text="text[index]"></v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script>
    export default {
      data: () => ({
        tab: null,
        items: [
          '硬碟觀察', '網路卡流量', 'CPU流量', '硬碟I/O',
        ],
        text: ['硬碟容量檢查','網路卡流量檢查','CPU使用率','硬碟吞吐量']
      
      }),
      methods:{
      },
    }
</script>