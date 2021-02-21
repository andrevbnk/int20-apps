<template>
    <v-app>
        <v-toolbar>
            <v-row align="center" justify="center">
                <v-btn @click="lostState" class="mr-2">Lost</v-btn>
                <v-btn @click="FoundState" class="ml-2">Found</v-btn>
            </v-row>
        </v-toolbar>
        <FormForLost v-if="state === 0"/>
        <FormForFound v-if="state === 1" />
    </v-app>
</template>

<script>
    import FormForLost from "@/components/Advert/FormForLost";
    import FormForFound from "@/components/Advert/FormForFound";

    export default {
        name: "Advert",
        components: {
            FormForLost,
            FormForFound
        },
        data() {
            return {
                state: 0
            }
        },
        methods: {
            lostState(){
                this.state=0
            },
            FoundState(){
                this.state=1
            }
        }

    }
</script>

<style scoped>

</style>