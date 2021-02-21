<template>
  <div id="app">
    <v-app id="inspire" app>
      <Header />

      <v-main class="grey lighten-3">
        <v-container fluid>
          <v-row>
            <v-col style="margin:0px; padding:0px;">
              <router-view></router-view>
            </v-col>
          </v-row>
          
        </v-container>
        <Footer />
      </v-main>

      <Dialog />

    
    </v-app>
  </div>
</template>

<script>
import Dialog from "@/components/Dialog.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
// import Search from "@/components/Search.vue";

export default {
  name: "App",

  components: {
    Dialog,
    Header,
    Footer,
    // Search,
  },

  data: () => ({}),
};
</script>
