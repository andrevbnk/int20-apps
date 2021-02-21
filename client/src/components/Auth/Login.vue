<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark text>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              label="E-mail"
              name="email"
              prepend-icon="mdi-account"
              type="text"
              v-model="email"
            ></v-text-field>

            <v-text-field
              id="password"
              label="Password"
              name="password"
              prepend-icon="mdi-lock"
              type="password"
              v-model="password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" href="/register" >Registration?</v-btn>
          <v-btn color="primary" @click="onLogin">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";
import * as actionTypes from "../../store/modules/auth/types/actions";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions("auth", {
      login: actionTypes.SIGN_IN,
    }),
    async onLogin() {
      try {
        await this.login({
          email: this.email,
          password: this.password,
        });
        this.$router.push({ name: "mainpage" });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped></style>
