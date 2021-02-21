<template>
  <div>
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-3" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="width: 25%" class="ml-0 pl-4">
        <a href="/landing" class="logo-link">
          <v-icon large style="margin-left: 45px; margin-top: 10px">mdi-dog-side</v-icon>
          <p>Anima Rescue</p>
        </a>
      </v-toolbar-title>

      <v-toolbar-items
        class="hidden-xs-only d-flex justify-space-between"
        style="width: 30%"
      >
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
          :color="item.color"
          style="width: 30%"
        >
          <v-icon left light>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <div class="search-header" style="width: 35%">
        <v-text-field
          solo-inverted
          hide-details
          clearable
          shaped
          prepend-inner-icon="mdi-magnify"
          label="Search"
          class="hidden-sm-and-down"
          v-model="serchParams"
          @input="searchReq"
        ></v-text-field>
      </div>
      <!-- <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn icon large>
        <v-avatar size="32px" item>
          <v-img
            src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
            alt="Vuetify"
          ></v-img
        ></v-avatar>
      </v-btn> -->
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
      <v-list dense>
        <template v-for="item in items">
          <v-row v-if="item.heading" :key="item.heading" align="center">
            <v-col cols="6">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
            <v-col cols="6" class="text-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-col>
          </v-row>
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="(child, i) in item.children" :key="i" link :href="child.path">
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item v-else :key="item.text" link>
            <v-list-item-action>
              
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
// :href="item.path?item.path:'#'"
export default {
  data: () => ({
    drawer: null,
    serchParams: "",
    menuItems: [
      { title: "Founded", path: "/", icon: "mdi-home", color: "primary" },
      { title: "Losts", path: "/lost", icon: "mdi-dog", color: "primary" },
      { title: "Sign In/Up", path: "/login", icon: "mdi-face", color: "primary" },
    ],
    items: [
      { icon: "mdi-contacts", text: "All " },
      { icon: "mdi-history", text: "Archive" },
      // { icon: "mdi-content-copy", text: "Duplicates" },
      {
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        text: "Labels",
        model: true,
        children: [
          { icon: "mdi-home",path:"/add-advert",  text: "Create Founded" },
          { icon: "mdi-dog", path:'/add-advert',  text: "Create Losts" },
          { icon: "mdi-note", path:'/add-advert', text: "Create Notes" },
        ],
      },
      // {
      //   icon: "mdi-chevron-up",
      //   "icon-alt": "mdi-chevron-down",
      //   text: "More",
      //   model: false,
      //   children: [
      //     { text: "Import" },
      //     { text: "Export" },
      //     { text: "Print" },
      //     { text: "Undo changes" },
      //     { text: "Other contacts" },
      //   ],,k
      // },
      { icon: "mdi-cog", text: "Settings" },
      { icon: "mdi-message", text: "Send feedback" },
      { icon: "mdi-help-circle", text: "Help" },
      // { icon: "mdi-cellphone-link", text: "App downloads" },
      // { icon: "mdi-keyboard", text: "Go to the old version" },
    ],
  }),
  methods: {
    searchReq() {
      console.log(this.serchParams.trim().toLowerCase());
      // axios.post('/sddsd',{param:this.serchParams.trim().toLowerCase()})
    },
  },
};
</script>

<style>
.logo-link{
  text-decoration: none !important;
  color:white !important;
}

</style>
