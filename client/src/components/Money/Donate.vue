<template>
<v-app id="app">

  <v-row align="center" justify="center">
    <v-col class="col-8" align="center">
      <v-toolbar class="mb-6">
        <v-spacer></v-spacer>
        <v-toolbar-title  class="display-1"><strong>Donate</strong></v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
    </v-col>
  </v-row>


<!--  <v-row justify="center">-->
<!--    <v-col class="col-sm-10 col-md-4">-->
<!--      <v-card outlined>-->
<!--        <v-form class="pa-4">-->
<!--          <p align="center"><strong>Personal Information</strong></p>-->
<!--          <v-row align="center" justify="center">-->
<!--            <v-col class="col-6">-->
<!--              <v-text-field label="Donor name"></v-text-field>-->
<!--            </v-col>-->
<!--          </v-row>-->
<!--          <v-row justify="center">-->
<!--            <v-col class="col-6">-->
<!--              <v-text-field label="Address"></v-text-field>-->
<!--            </v-col>-->
<!--          </v-row>-->
<!--          <v-row justify="center">-->
<!--            <v-col class="col-6">-->
<!--              <v-text-field label="Phone number"></v-text-field>-->
<!--            </v-col>-->
<!--          </v-row>-->
<!--          <v-row justify="center">-->
<!--            <v-col class="col-6">-->
<!--              <v-text-field label="Email"></v-text-field>-->
<!--            </v-col>-->
<!--          </v-row>-->
<!--        </v-form>-->
<!--      </v-card>-->
<!--    </v-col>-->
<!--  </v-row>-->

  <v-row justify="center">
    <v-col class="col-sm-10 col-md-4">
      <v-card outlined class="card">
        <p align="center" class="pt-4"><strong>Gift amount</strong></p>
        <v-row class="pa-4">
          <v-col>
            <v-select v-model="amount" :items="amounts" label="Select amount"></v-select>
          </v-col>
          <v-col>
            <v-text-field v-model="other" label="other"></v-text-field>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>

  <v-row justify="center">
    <v-col class="col-sm-10 col-md-4">
      <v-card outlined class="card">
        <v-form class="pa-4">
          <p align="center"><strong>Payment method</strong></p>
          <v-row align="center" justify="center">
            <v-col class="col-6">
              <v-text-field v-model="cardNubmer" label="Credit Card Number"></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col class="col-6">
              <v-text-field v-model="expDate" label="Expiration Date"></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col class="col-6">
              <v-text-field v-model="cvv" label="CVV (card verification value)"></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col class="col-6">
              <v-text-field  v-model="holdersName" label="Card holder’s name"></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col class="col-6">
              <v-text-field v-model="signature" label="Signature"></v-text-field>
            </v-col>
          </v-row>
        </v-form>
      </v-card>
    </v-col>
  </v-row>

  <v-footer class="mt-5">
    <v-spacer></v-spacer>
    <v-btn outlined>Donate</v-btn>
    <v-spacer></v-spacer>
  </v-footer>

</v-app>
</template>

<script>
export default {
  name: "Donate",
  data: () => ({
    amounts: ['10', '15', '25', '50', '100'],
    amount: '',
    other: '',
    money: null,
    // name: "",
    // adreess: "",
    // phoneNumber: "",         // User has to be singed up to donate or sponsor
    // Email: "",
    cardNubmer: "",
    expDate: "",
    cvv: "",
    holdersName: "",
    signature: ""
  }),
  methods: {
    donate(){
      if(this.amount) this.money = this.amount
      else if(!this.amount && this.other) this.money = this.other
      else console.error("No correct donate summ")
    }
  }
}
</script>

<style scoped>
#app {
  background: lightgrey;
}

.card{
  border-radius: 10px;
  background: lavender;
}

</style>