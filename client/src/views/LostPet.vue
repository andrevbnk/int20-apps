<template>
    <v-row class="pa-5">
    <Filters />
    <LostPet />
    </v-row>
</template>

<script>
import LostPet from '@/components/LostPet.vue';
import Filters from "@/components/Filters.vue";

export default {
    components:{
        Filters,
        LostPet,
    }
}
</script>

<style>

</style>