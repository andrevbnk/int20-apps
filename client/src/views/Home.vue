<template>
  <div class="home">
    <v-row class="pa-5">
      <v-col sm="12" lg="3" xl="2">
        <v-sheet rounded="lg">
          <v-list color="transparent">
            <v-list-item v-for="(val, key) in filter[0]" :key="key" link>
              <!-- <v-list-item-title> List Item {{ n }} </v-list-item-title> -->
              <v-select
                v-model="activeFilter[key]"
                :items="val.item"
                attach
                clearable
                chips
                :multiple="val.multiple"
                :label="key.split('animal')"
              ></v-select>
            </v-list-item>

            <v-divider class="my-2"></v-divider>

            <v-list-item link color="grey lighten-4" @click.prevent="resetFilter">
              <v-list-item-content class="text-center">
                <v-list-item-title>Refresh </v-list-item-title>
              </v-list-item-content>
              <v-spacer></v-spacer>
              <v-list-item-icon>
                <v-icon>mdi-restore</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-sheet>
      </v-col>

      <v-col>
        <v-sheet min-height="70vh" rounded="lg">
          <v-container>
            <div class="d-flex flex-wrap align-center mr-auto">
              <div
                class="card-animal"
                v-for="(n,index) in sortFilterAnimals"
                :key="n.description"
              >
                <Card :id="index" :animal="n" />
                
              </div>
            </div>
          </v-container>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  components: {
    Card,
  },
  data: () => ({
    filter: [
      {
        city: {
          item: [
            "Kyiv",
            "Kharkiv",
            "Odesa",
            "Dnipro",
            "Donetsk",
            "Zaporizhzhia",
            "Lviv",
            "Kryvyy Rih",
            "Mykolaiv",
            "Mariupol",
            "Sevastopol",
            "Luhansk",
          ],
          multiple: false,
        },
        animalSize: { item: ["xs", "s", "m", "lg", "xl", "xxl"], multiple: true },
        animalColor: { item: ["black", "gold", "white", "grey"], multiple: false },
        animalType: { item: ["Dog", "Cat", "Fox", "Insects", "Hamsters"] },
      },
    ],
    activeFilter: {
      city: [],
      animalSize: [],
      animalColor: [],
      animalType: [],
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
        image:'https://lostpets.com.ua/components/com_djclassifieds/images/item/2/2405_70010207_2446707765366533_7535777320653553664_n_2linda_thb.jpg',
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
        image:'https://lostpets.com.ua/components/com_djclassifieds/images/item/2/2413_img_20210131_132212_thb.jpg',
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
        image:'https://lostpets.com.ua/components/com_djclassifieds/images/item/2/2415_0-02-0a-cdc0e9ed020b548c7a1c5a583b1ecc7b8382b671de6bb034a84a306b51dc2261_64c0178e_thb.jpg',
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
        image:'https://lostpets.com.ua/components/com_djclassifieds/images/item/2/2419_239fde80-dfb0-4c93-8308-53b55b0715e7_thb.jpg',
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
        image:'https://lostpets.com.ua/components/com_djclassifieds/images/item/2/2414_img_0881_thb.jpg',
        createdAt: "21/02/2021",
        user: {
          name: "Andrew",
          phone: "+380688668756",
          email: "andrevbnk72@gmail.com",
        },
      },
    ],

    dropdown_edit: [
      { text: "Date >" },
      { text: "Date <" },

    ],
  }),

  computed: {
    sortFilterAnimals: function () {
      return this.animals.filter((elem) =>
        this.satisfiesProducts(elem, this.activeFilter)
      );

    },
  },
  methods: {
    resetFilter() {
      for (let i in this.activeFilter) {
        this.activeFilter[i] = [];
      }
    },
    satisfiesProducts(product, filters) {
      function satisfiesFilter(property, filter) {
        return !filter.length || filter.includes(property);
      }
      let result = Object.keys(filters).map((key) =>
        satisfiesFilter(product[key], filters[key])
      );
      result = result.reduce((acc, satisfies) => acc && satisfies, true);
      return result;
    },

    // filtersProducts(allProducts, filters) {
    //   return allProducts.filter((elem) => this.satisfiesProducts(elem, filters));
    // },
  },
  watch: {
    activeFilter: {
      handler() {},
      deep: true,
    },
  },
};
</script>

<style></style>
