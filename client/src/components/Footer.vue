<template>
  <v-footer dark style="margin:0px;padding:0px;margin-bottom: -260px" absolute>
    <v-card flat tile class="indigo lighten-1 white--text text-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
              <v-row class="mb-1">
        <v-col class="d-flex justify-center"> 
          <v-btn block color="green" to="/donate">Donate</v-btn>
        </v-col>
        <v-col class="d-flex justify-center">
          <v-btn block to="/sponsor" color="yellow">Become a sponsor</v-btn>
        </v-col> 
      </v-row
      >
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus
        commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc.
        Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae
        velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel
        ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam
        elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Animal Rescue</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
    data: () => ({
      icons: [
        'mdi-cat',
        'mdi-dog',
        'mdi-snake',
        'mdi-snail',
      ],
    }),
  }
</script>

<style></style>
