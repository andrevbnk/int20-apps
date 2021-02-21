<template>
  <div>
    <v-app>
      <v-card class="ma-6">
        <v-container class="mt-6 hidden-sm-and-down">
          <v-row align="center" justify="center">
            <h1 class="display-1"><strong>Lets register found animal</strong></h1>
          </v-row>
        </v-container>
        <v-container class="mt-6 hidden-md-and-up">
          <v-row align="center" justify="center">
            <h6 class="display-1"><strong>Lets register found animal</strong></h6>
          </v-row>
        </v-container>
        <v-container class="mt-6 pa-9">
          <v-form ref="form" lazy-validation>
            <v-row>
              <v-text-field v-model="header" :counter="100" label="Header" required></v-text-field>
            </v-row>
            <v-row>
              <v-col>
                <v-select
                    v-model="animalType"
                    :items="types"
                    label="Choose type"
                >
                </v-select>
              </v-col>
              <v-col>
                <v-select
                    v-model="size"
                    :items="sizes"
                    label="Choose size"
                >
                </v-select>
              </v-col>
              <v-col>
                <v-select
                    v-model="color"
                    :items="colors"
                    label="Choose color"
                >
                </v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-text-field v-model="description" label="Enter description"></v-text-field>
            </v-row>
            <v-row align="center" justify="center">
              <v-col class="col-6">
                <v-file-input label="Choose image"></v-file-input>
              </v-col>
            </v-row>
            <v-row align="center" justify="center" class="mb-5">
              <v-btn @click="onAddAdvert">Upload</v-btn>
            </v-row>
          </v-form>
        </v-container>
      </v-card>
    </v-app>
  </div>
</template>

<script>

import advertService from "../../services/advert/advertService";
export default {
    name: "FormForFound",
    data() {
        return {
            types : [],
            colors : [],
            sizes : [],
            selectedFile: null,
            header: "",
            animalType: "",
            color: "",
            size: "",
            description: "",
        }
    },
    created() {
        this.types = require('./Collections').types;
        this.colors = require('./Collections').colors;
        this.sizes = require('./Collections').sizes;
    },
    methods:{
        onFilesSelected(event) {
            this.selectedFile = event.target.files[0];
            console.log(event)
        },
        async onAddAdvert(){
            try {
                await advertService.addFoundAdvert({
                    title: this.header,
                    animalType: this.animalType,
                    color: this.color,
                    size: this.size,
                    description: this.description,
                    type: 'found'
                });
                this.size = this.animalType = this.header = this.color = this.description = null;
            } catch (error) {
                console.log(error);
            }
        },
    }
}
</script>

<style scoped>

</style>