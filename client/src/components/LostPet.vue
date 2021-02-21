<template>


    <v-col>
      <v-sheet min-height="70vh" rounded="lg">
        <v-container>
          <div class="d-flex flex-wrap">
            <div class="card-animal" v-for="n in 3" :key="n">
              <Card :id="n" :animal="n"/>
            </div>
          </div>
        </v-container>
      </v-sheet>
    </v-col>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
    components:{
        Card,
    }
}
</script>

<style>

</style>