<template>

    <v-col>
      <v-sheet min-height="70vh" rounded="lg">
        <v-container>
          <div class="d-flex flex-wrap">
            <div class="card-animal" v-for="n in animals" :key="n">
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
    },
    data:()=>({
    animals: [
      {
        title: "Dog Haski",
        city: "Kiev",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        animalType: "Dog",
        animalSize: "xs",
        animalColor: "grey",
        image:'https://lostpets.com.ua/components/com_djclassifieds/images/item/2/2405_70010207_2446707765366533_7535777320653553664_n_2linda_thb.jpg',
        createdAt: "21/02/2021",
        user: {
          name: "Andrew",
          phone: "+380688668756",
          email: "andrevbnk72@gmail.com",
        },
      },
      {
        title: "Dog Haski",
        city: "Kiev",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        animalType: "Dog",
        animalSize: "xs",
        animalColor: "black",
        createdAt: "21/02/2021",
        image:'https://lostpets.com.ua/components/com_djclassifieds/images/item/2/2405_70010207_2446707765366533_7535777320653553664_n_2linda_thb.jpg',
        user: {
          name: "Andrew",
          phone: "+380688668756",
          email: "andrevbnk72@gmail.com",
        },
      },
      {
        title: "Dog Haski",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        animalType: "Cat",
        animalSize: "s",
        animalColor: "black",
        city: "Kharkiv",
        createdAt: "21/02/2021",
        image:'https://lostpets.com.ua/components/com_djclassifieds/images/item/2/2405_70010207_2446707765366533_7535777320653553664_n_2linda_thb.jpg',
        user: {
          name: "Andrew",
          phone: "+380688668756",
          email: "andrevbnk72@gmail.com",
        },
      },

      {
        title: "Dog Haski",
        city: "Odesa",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        animalType: "Dog",
        animalSize: "lg",
        animalColor: "gold",
        image:'https://lostpets.com.ua/components/com_djclassifieds/images/item/2/2405_70010207_2446707765366533_7535777320653553664_n_2linda_thb.jpg',
        createdAt: "21/02/2021",
        user: {
          name: "Andrew",
          phone: "+380688668756",
          email: "andrevbnk72@gmail.com",
        },
      },

      {
        title: "Dog Haski",
        city: "Odesa",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        animalType: "Dog",
        animalSize: "xl",
        animalColor: "gold",
        image:'https://lostpets.com.ua/components/com_djclassifieds/images/item/2/2405_70010207_2446707765366533_7535777320653553664_n_2linda_thb.jpg',
        createdAt: "21/02/2021",
        user: {
          name: "Andrew",
          phone: "+380688668756",
          email: "andrevbnk72@gmail.com",
        },
      },
    ],
    })
}
</script>

<style>

</style>