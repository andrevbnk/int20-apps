<template>
  <v-row class="pa-5">
    <Filters />
    <NotesPet />
  </v-row>
</template>

<script>
import NotesPet from "@/components/NotesPet.vue";
import Filters from "@/components/Filters.vue";
export default {
  components: {
    NotesPet,
    Filters,
  },
};
</script>

<style></style>
