<template>
  <v-row class="pa-5">
    <Filters />
    <FindPet />
  </v-row>
</template>

<script>
import FindPet from "@/components/FindPet.vue";
import Filters from "@/components/Filters.vue";

export default {
    components:{
        FindPet,
        Filters,
    }
}
</script>

<style>

</style>