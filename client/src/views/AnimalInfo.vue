<template>
  <v-row class="pa-5">
    <v-col>
      
      <v-sheet min-height="80vh" rounded="lg" class="pa-10">
        
        <v-row>
          <v-col class="col-7">
            <v-carousel v-model="model">
              <v-carousel-item>
                    <v-img :src="animals[$route.params.id].image" contained></v-img>
              </v-carousel-item>
            </v-carousel>
          </v-col>

          <v-col class="col-3 ml-10">
            <v-list>
              <v-subheader>REPORTS</v-subheader>
              

              <v-list-item v-for="(item, i) in animals[$route.params.id].user" :key="i">
                <v-list-item-icon>
                  <v-icon v-text="items[i]"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <!-- <v-text-field v-model="text1" ref="textToCopy"></v-text-field>
            <v-btn @click="copyText">copy</v-btn> -->
            <v-btn class="mt-10" color="primary" :href='computedLink' block> Связаться с владельцем </v-btn>
          </v-col>

        </v-row>

        <v-row>
          <v-col>
            <h2>Описание:</h2>
            <p class="align-center">
              {{animals[$route.params.id].description}}
            </p>
          </v-col>

          <v-col class="text-center"> </v-col>
        </v-row>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    computedLink:function(){
      return 'mailto:'+this.animals[this.$route.params.id].user.email;
    }
    
  },
  data: () => ({
    // text1: "lorem ipsum 123",
    model: 0,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
    items: {
      name: "mdi-account-check-outline",
      phone: "mdi-phone",
      email: "mdi-gmail",
    },

    animals: [
      {
        title: "Dog Haski",
        city: "Kiev",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        animalType: "Dog",
        animalSize: "xs",
        animalColor: "grey",
        image:
          "https://lostpets.com.ua/components/com_djclassifieds/images/item/2/2405_70010207_2446707765366533_7535777320653553664_n_2linda_thb.jpg",
        createdAt: "21/02/2021",
        user: {
          name: "Andrew",
          phone: "+380688668756",
          email: "andrevbnk72@gmail.com",
        },
      },
      {
        title: "Cat 'Oliver' ",
        city: "Kiev",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        animalType: "Cat",
        animalSize: "xs",
        animalColor: "black",
        createdAt: "21/02/2021",
        image:
          "https://lostpets.com.ua/components/com_djclassifieds/images/item/2/2413_img_20210131_132212_thb.jpg",
        user: {
          name: "Andrew",
          phone: "+380688668756",
          email: "andrevbnk72@gmail.com",
        },
      },
      {
        title: "Fox",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        animalType: "Fox",
        animalSize: "s",
        animalColor: "black",
        city: "Kharkiv",
        createdAt: "21/02/2021",
        image:
          "https://lostpets.com.ua/components/com_djclassifieds/images/item/2/2415_0-02-0a-cdc0e9ed020b548c7a1c5a583b1ecc7b8382b671de6bb034a84a306b51dc2261_64c0178e_thb.jpg",
        user: {
          name: "Andrew",
          phone: "+380688668756",
          email: "andrevbnk72@gmail.com",
        },
      },

      {
        title: "Vasia mastif",
        city: "Odesa",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        animalType: "Cat",
        animalSize: "lg",
        animalColor: "gold",
        image:
          "https://lostpets.com.ua/components/com_djclassifieds/images/item/2/2419_239fde80-dfb0-4c93-8308-53b55b0715e7_thb.jpg",
        createdAt: "21/02/2021",
        user: {
          name: "Andrew",
          phone: "+380688668756",
          email: "andrevbnk72@gmail.com",
        },
      },

      {
        title: "Lost Good Boy 'Sharisk' ",
        city: "Odesa",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        animalType: "Dog",
        animalSize: "xl",
        animalColor: "black",
        image:
          "https://lostpets.com.ua/components/com_djclassifieds/images/item/2/2414_img_0881_thb.jpg",
        createdAt: "21/02/2021",
        user: {
          name: "Andrew",
          phone: "+380688668756",
          email: "andrevbnk72@gmail.com",
        },
      },
    ],
    methods: {
      copyText() {
        let textToCopy = this.$refs.textToCopy.$el.querySelector("input");
        textToCopy.select();
        document.execCommand("copy");
      },
    },
  }),
};
</script>

<style scoped></style>
