<template>
  <div
    :class="getBackground"
    class="container"
  >
    <Notification
      :text="text"
      v-if="hasText"
    />

    <RequestAccount/>

    <div class="login">
      <img
        :src="srcLogo"
        alt
      >

      <h4 :class="getColor">Sign into Design+Code HQ</h4>

      <form
        @submit.prevent="onSubmit"
        class="form"
      >
        <input
          :class="getBackgroundandColorInput"
          placeholder="Email"
          type="email"
          v-model="email"
        >
        <input
          :class="getBackgroundandColorInput"
          placeholder="Password"
          type="password"
          v-model="password"
        >
        <button type="submit">Sign In</button>

        <ThemeSwitch/>

        <router-link
          :class="getForgotLinkColor"
          to="/recover"
        >Forgotten your password?</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import RequestAccount from "@/components/RequestAccount";
import ThemeSwitch from "@/components/ThemeSwitch";
import Notification from "@/components/Notification";

// import * as netlifyIdentity from "netlify-identity-widget";
import lightLogo from "@/assets/DCHQ.svg";
import darkLogo from "@/assets/DCHQ-dark.svg";
import { auth } from "@/main";

export default {
  name: "Signin",
  components: {
    Notification,
    RequestAccount,
    ThemeSwitch
  },
  data() {
    return {
      email: "",
      password: "",
      hasText: false,
      text: ""
    };
  },
  mounted() {
    // netlifyIdentity.open();
    // нам всё ещё нужна инициализация netlifyIdentity, но теперь мы отправляем запрос через свою форму с помощью gotrue-js

    // prettier-ignore
    const { userLoggedOut, userRecoveredAccount, email, userRequestedAccount } = this.$route.params;

    if (userLoggedOut) {
      this.hasText = true;
      this.text = "You have logged out!";
    } else if (userRecoveredAccount) {
      this.hasText = true;
      this.text = `A recovery email has been sent to ${email}`;
    } else if (userRequestedAccount) {
      this.hasText = true;
      this.text = `Your request has been sent to an administator for ${email}`;
    }
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
    getBackground() {
      return !this.isDarkMode ? "light-background" : "dark-background";
    },
    getColor() {
      return !this.isDarkMode ? "dark-text" : "light-text";
    },
    getBackgroundandColorInput() {
      return !this.isDarkMode ? "dark-field" : "light-field";
    },
    srcLogo() {
      return !this.isDarkMode ? darkLogo : lightLogo;
    },
    getForgotLinkColor() {
      return !this.isDarkMode ? "dark-link" : "light-link";
    }
  },
  methods: {
    onSubmit() {
      if (this.email && this.password) {
        auth
          // если передать третий аргумент true, то юзера запомнят в куках https://github.com/netlify/gotrue-js/blob/master/src/index.js#L57, также должнен стоять флаг 'setCookie: true' при инициализации
          .login(this.email, this.password, true)
          .then(() => this.$router.replace("/"))
          // eslint-disable-next-line
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
  padding-top: 16px;
  padding-bottom: 24px;
}

.login {
  width: 400px;
  text-align: center;
  margin: 0 16px;
}
</style>
