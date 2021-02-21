<template>
  <v-col sm="12" lg="3" xl="2">
    <v-sheet rounded="lg">
      <v-list color="transparent">
        <v-list-item v-for="(val, key) in filter[0]" :key="key" link>
          <!-- <v-list-item-title> List Item {{ n }} </v-list-item-title> -->
          <v-select
            v-model="activeFilter[key]"
            :items="val.item"
            attach
            :clearable="!val.multiple"
            chips
            :multiple="val.multiple"
            :label="key"
          ></v-select>
        </v-list-item>

        <v-divider class="my-2"></v-divider>

        <v-list-item link color="grey lighten-4" @click.prevent="resetFilter">
          <v-list-item-content class="text-center">
            <v-list-item-title>Refresh </v-list-item-title>
          </v-list-item-content>
          <v-spacer></v-spacer>
          <v-list-item-icon>
            <v-icon >mdi-restore</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-sheet>
  </v-col>
</template>

<script>
export default {
  data: () => ({
    filter: [
      {
        city:{item:["Kyiv", "Kharkiv", "Odesa", "Dnipro", "Donetsk", "Zaporizhzhia", "Lviv", "Kryvyy Rih", "Mykolaiv", "Mariupol", "Sevastopol", "Luhansk"],multiple:false},
        size: { item: ["xs", "s", "m", "lg", "xl", "xxl"], multiple: true },
        color: { item: ["black", "gold", "white", "grey"], multiple: false },
        type:{item:['Dog','Cat','Fox','Insects','Hamsters']}
      },
    ],
    activeFilter: {
      city: [],
      size: [],
      color: [],
      breed: [],
    },
    
  }),
  methods: {
    resetFilter(){
      for(let i in this.activeFilter){
        this.activeFilter[i] = [];
      }
    }
  },
  watch: {
      activeFilter:{
        handler(){
          
        },
        deep:true,
      }
  },
};
</script>

<style>
.border-green {
  border: 1px solid green;
}
</style>
