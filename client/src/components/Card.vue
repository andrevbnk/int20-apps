<template>
  <div>
    <v-card max-width="284" class="pa-ma-4 ma-lg-4">
      <router-link :to="{ path: `/animal/${animal.id}`}">
        <v-img
          :src="animal.image"
          height="200px"
        ></v-img>
      </router-link>

      <v-card-title> {{animal.title}} </v-card-title>

      <v-card-subtitle> 
        <ul style="list-style:none;margin:0;">
          <li>Type: {{animal.animalType}}</li>
          <li>Size: {{animal.animalSize}}</li>
          <li>Color: {{animal.animalColor}}</li>
        </ul>  
      </v-card-subtitle>

      <v-card-actions>
        <v-btn text>Share</v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
             {{animal.description}}
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
export default {
  props:['animal'],
    data:()=>({
        show: false,
    }),
};
</script>

<style></style>
