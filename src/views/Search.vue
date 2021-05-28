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
            查詢使用者資料
          </h3>
          <br />
        </v-col>
      </v-row>
    </v-row>
    
    <v-card>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
        :single-select="singleSelect"
        v-model="selected"
        item-key="name"
        show-select
        class="elevation-1"
      >
        <template v-slot:top>
          <v-card-title>
            <!--單選按鈕-->
            <v-switch
              v-model="singleSelect"
              label="單選(Single select)"
              class="pa-1"
            ></v-switch>

            <v-spacer></v-spacer>
            <!--搜尋框-->
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="搜尋"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
        
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
              >
                New Item
              </v-btn>
            </template>
            <v-card>
              <!--可能可以不用-->
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.name" label="Dessert name">
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.calories" label="Calories">
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.fat" label="Fat (g)">
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.carbs" label="Carbs (g)">
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.protein" label="Protein (g)">
                      </v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" text @click="save">
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <!--刪除資料的跳出視窗-->
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
        <!--編輯資料的跳出視窗-->
        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item)">
            mdi-delete
          </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize">
            Reset
          </v-btn>
        </template>
      </v-data-table>
      <v-spacer></v-spacer>
    </v-card>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn :disabled="loading" color="balck" plain>
        <v-icon>mdi-account-convert</v-icon>
        變更身份
      </v-btn>
      <v-btn :loading="loading" color="black" plain @click="remove">
        <v-icon>mdi-harddisk</v-icon>
        硬碟大小
      </v-btn>
      <v-btn :disabled="loading" color="balck" plain>
        <v-icon>mdi-book-open-variant</v-icon>
        課程管理
      </v-btn>
      <v-btn :loading="loading" color="error" plain @click="remove">
        <v-icon>mdi-account-remove</v-icon>
        刪除帳號
      </v-btn>
    </v-card-actions>
  </v-container>
</template>

<script>
    export default {
      data: () => ({
        dialog: false,
        dialogDelete: false,
        search: '',
        loading: false,
        singleSelect: false,
        selected: [],
        headers: [
          {
            text: '帳號',
            align: 'start',
            sortable: true,
            value: 'name',
          },
          { text: '身份', value: 'fat' },
          { text: '硬碟大小', value: 'carbs' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
        desserts: [],
        editedIndex: -1,
        editedItem: {
          name: '',
          calories: 0,
          fat: 0,
          carbs: 0,
          protein: 0,
        },
        defaultItem: {
          name: '',
          calories: 0,
          fat: 0,
          carbs: 0,
          protein: 0,
        },
      }),
      computed: {
        formTitle () {
          return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        },
      },

      watch: {
        dialog (val) {
          val || this.close()
        },
        dialogDelete (val) {
          val || this.closeDelete()
        },
      },

      created () {
        this.initialize()
      },
      methods:{
        async remove () {
          this.loading = true

          await new Promise(resolve => setTimeout(resolve, 3000))

          this.loading = false
        },
        initialize () {
          this.desserts = [
            {
              name: 'Frozen Yogurt',
              calories: 1599,
              fat: 6111.0,
              carbs: 24,
              protein: 4.0,
            },
            {
              name: 'Ice cream sandwich',
              calories: 237,
              fat: 9.0,
              carbs: 37,
              protein: 4.3,
            },
            {
              name: 'Eclair',
              calories: 262,
              fat: 16.0,
              carbs: 23,
              protein: 6.0,
            },
            {
              name: 'Cupcake',
              calories: 305,
              fat: 3.7,
              carbs: 67,
              protein: 4.3,
            },
            {
              name: 'Gingerbread',
              calories: 356,
              fat: 16.0,
              carbs: 49,
              protein: 3.9,
            },
            {
              name: 'Jelly bean',
              calories: 375,
              fat: 0.0,
              carbs: 94,
              protein: 0.0,
            },
            {
              name: 'Lollipop',
              calories: 392,
              fat: 0.2,
              carbs: 98,
              protein: 0,
            },
            {
              name: 'Honeycomb',
              calories: 408,
              fat: 3.2,
              carbs: 87,
              protein: 6.5,
            },
            {
              name: 'Donut',
              calories: 452,
              fat: 25.0,
              carbs: 51,
              protein: 4.9,
            },
            {
              name: 'KitKat',
              calories: 518,
              fat: 26.0,
              carbs: 65,
              protein: 7,
            },
          ]
        },
        editItem (item) {
          this.editedIndex = this.desserts.indexOf(item)
          this.editedItem = Object.assign({}, item)
          this.dialog = true
        },

        deleteItem (item) {
          this.editedIndex = this.desserts.indexOf(item)
          this.editedItem = Object.assign({}, item)
          this.dialogDelete = true
        },

        deleteItemConfirm () {
          this.desserts.splice(this.editedIndex, 1)
          this.closeDelete()
        },

        close () {
          this.dialog = false
          this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
          })
        },

        closeDelete () {
          this.dialogDelete = false
          this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
          })
        },

        save () {
          if (this.editedIndex > -1) {
            Object.assign(this.desserts[this.editedIndex], this.editedItem)
          } else {
            this.desserts.push(this.editedItem)
          }
          this.close()
        },
      }
    }
</script>