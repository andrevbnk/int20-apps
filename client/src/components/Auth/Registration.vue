<template>
  <v-row align="center" justify="center" class="my-3">
    <v-col cols="12" sm="8" md="4">
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark text>
          <v-toolbar-title>Registration</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              label="Name"
              name="name"
              v-model="name"
              prepend-icon="mdi-account"
              type="text"
            ></v-text-field>

            <v-text-field
              label="E-mail"
              name="email"
              v-model="email"
              prepend-icon="mdi-gmail"
              type="text"
            ></v-text-field>

            <v-text-field
              label="Phone number"
              name="name"
              v-model="phoneNumber"
              prepend-icon="mdi-phone"
              type="text"
            ></v-text-field>

            <v-text-field
              id="password"
              label="Password"
              name="password"
              v-model="password"
              prepend-icon="mdi-lock"
              type="password"
            ></v-text-field>
            <v-text-field
              id="password_rep"
              label="Password confirm"
              name="password"
              v-model="password_confirmation"
              prepend-icon="mdi-lock"
              type="password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary"><router-link to="/login" style="color:white; text-decoration:none">Login?</router-link></v-btn>
          <v-btn color="primary" @click="onRegister" :loading="regLoading"
            >Register</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";
import * as actionTypes from "../../store/modules/auth/types/actions";
export default {
  name: "Registration",
  data: () => ({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    password_confirmation: "",
    regLoading: false,
  }),
  methods: {
    ...mapActions("auth", {
      register: actionTypes.SIGN_UP,
    }),
    async onRegister() {
      try {
        this.regLoading = true;
        await this.register({
          email: this.email,
          name: this.name,
          phone: this.phoneNumber,
          password: this.password,
          password_confirmation: this.password_confirmation,
        });
        this.regLoading = false;
        this.name = this.email = this.phoneNumber = this.password = this.password_confirmation =
          "";
      } catch (error) {
        this.regLoading = false;
        console.log(error);
      }
    },
  },
};
</script>

<style scoped></style>
