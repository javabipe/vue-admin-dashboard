<template>
  <div id="nav">
    <router-link
      exact
      to="/"
    >Home</router-link>&nbsp;|
    <router-link to="/team">Team</router-link>&nbsp;|
    <button
      @click="logout"
      type="button"
    >Logout</button>
  </div>
</template>

<script>
import { auth } from "@/main";

export default {
  name: "Header",
  methods: {
    logout() {
      const user = auth.currentUser();
      user
        .logout()
        .then(res => {
          this.$router.push({
            name: "Signin", // name 'Signin', not path '/signin', see router file
            params: { userLoggedOut: true }
          });
        })
        .catch(console.log);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
