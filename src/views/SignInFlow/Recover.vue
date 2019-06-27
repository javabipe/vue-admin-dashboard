<template>
  <div
    :class="{'light-background': !isDarkMode, 'dark-background': isDarkMode}"
    class="container"
  >
    <RequestAccount/>

    <div class="login">
      <img
        alt
        src="@/assets/DCHQ.svg"
        v-show="isDarkMode"
      >
      <img
        alt
        src="@/assets/DCHQ-dark.svg"
        v-show="!isDarkMode"
      >

      <h4
        :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}"
      >Recover Account</h4>

      <form
        @submit.prevent="onSubmit"
        class="form"
      >
        <input
          :class="{'light-field': isDarkMode, 'dark-field': !isDarkMode}"
          placeholder="Email"
          type="email"
          v-model="email"
        >
        <button type="submit">Send Email</button>

        <ThemeSwitch/>

        <router-link
          :class="{'light-link': isDarkMode, 'dark-link': !isDarkMode}"
          to="/signin"
        >Already have an account? Sign in now</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import RequestAccount from "@/components/RequestAccount";
import ThemeSwitch from "@/components/ThemeSwitch";

import { auth } from "@/main";

export default {
  name: "Recover",
  components: {
    RequestAccount,
    ThemeSwitch
  },
  data() {
    return {
      email: ""
    };
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  methods: {
    onSubmit() {
      if (this.email) {
        auth
          .requestPasswordRecovery(this.email)
          .then(() => {
            this.$router.push({
              name: "Signin", // name 'Signin', not path '/signin', see router file
              params: {
                userRecoveredAccount: true,
                email: this.email
              }
            });
          })
          .catch(console.log);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.login {
  width: 400px;
}
</style>
