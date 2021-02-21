<template>
    <div>
        <v-app>
            <v-container>
                <v-card class="ma-6">
                    <v-container class="mt-6 hidden-sm-and-down">
                        <v-row align="center" justify="center">
                            <h1 class="display-1"><strong>Lets register lost animal</strong></h1>
                        </v-row>
                    </v-container>
                    <v-container class="mt-6 hidden-md-and-up">
                        <v-row align="center" justify="center">
                            <h6 class="display-1"><strong>Lets register lost animal</strong>></h6>
                        </v-row>
                    </v-container>
                    <v-container class="mt-6 pa-9">
                        <v-form ref="form" lazy-validation>
                            <v-row>
                                <v-text-field
                                        v-model="header"
                                        :counter="100"
                                        label="Header"
                                        required
                                        outlined
                                        dense
                                ></v-text-field>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-select
                                            outlined
                                            dense
                                            v-model="type"
                                            :items="types"
                                            label="Choose type"
                                    >
                                    </v-select>
                                </v-col>
                                <v-col>
                                    <v-select
                                            outlined dense
                                            v-model="size"
                                            :items="sizes"
                                            label="Choose size"
                                    >
                                    </v-select>
                                </v-col>
                                <v-col>
                                    <v-select
                                            outlined dense
                                            v-model="color"
                                            :items="colors"
                                            label="Choose color"
                                    >
                                    </v-select>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-textarea
                                        outlined
                                        dense
                                        v-model="description"
                                        label="Enter description"></v-textarea>
                            </v-row>
                            <v-row align="center" justify="center">
                                <v-col class="col-6">
                                    <v-file-input label="Choose image"></v-file-input>
                                </v-col>
                            </v-row>
                            <v-row class="mb-5">
                                <v-text-field outlined dense v-model="location" label="Enter where did you lost your animal"></v-text-field>
                            </v-row>
                            <v-row align="center" justify="center" class="mb-5">
                                <h1 class="display-1">When did you lose your animal</h1>
                            </v-row>
                            <h2 class="text-center">{{ date + ' ' + time }}</h2>
                            <v-row align="center" justify="center" class="hidden-sm-and-down">
                                <v-col align="center">
                                    <v-date-picker v-model="date"></v-date-picker>
                                </v-col>
                                <v-col align="center">
                                    <v-time-picker v-model="time"></v-time-picker>
                                </v-col>
                            </v-row>
                            <div class="hidden-md-and-up">
                                <v-row>
                                    <v-date-picker v-model="date"></v-date-picker>
                                </v-row>
                                <v-row>
                                    <v-time-picker v-model="time"></v-time-picker>
                                </v-row>
                            </div>
                            <v-row align="center" justify="center" class="mb-5">
                                <v-btn
                                        @click="onUpload"
                                        color="primary"
                                        large
                                        depressed
                                        :loading="uploadLoading"
                                >
                                    Upload
                                </v-btn>
                            </v-row>
                        </v-form>
                    </v-container>
                </v-card>
            </v-container>
        </v-app>
    </div>
</template>

<script>
    import advertService from "../../services/advert/advertService";
    export default {
        name: "FormForLost",
        data() {
            return {
                types : [],
                colors : [],
                sizes : [],
                selectedFile: null,
                header: "",
                type: "",
                color: "",
                size: "",
                description: "",
                location: "",
                date: '',
                time: '',
                uploadLoading: false
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
            async onUpload(){
                try {
                    this.uploadLoading = true;
                    await advertService.addLostAdvert({
                        title: this.header,
                        animalType: this.type,
                        color: this.color,
                        size: this.size,
                        description: this.description,
                        location: this.location,
                        lostDate: this.date + ' ' + this.time
                    });
                    this.uploadLoading = false;
                } catch (error) {
                    this.uploadLoading = false;
                    console.log(error);
                }
            }
        }
    }
</script>

<style scoped>

</style>