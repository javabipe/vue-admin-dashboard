<template>
  <div
    :class="getBackground"
    class="container"
  >
    <Notification
      :text="text"
      v-if="hasText"
    />
    <div
      :class="getRequestBackgroundandColor"
      class="request"
    >
      Don’t have a Design+Code HQ account?
      <router-link to="/request">Request an account</router-link>
    </div>

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
        <button
          @click="toggleDarkMode"
          type="button"
        >Toggle</button>

        <router-link
          :class="getForgotLinkColor"
          class="forgot-link"
          to="/recover"
        >Forgotten your password?</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import Notification from "@/components/Notification";

// import * as netlifyIdentity from "netlify-identity-widget";
import lightLogo from "@/assets/DCHQ.svg";
import darkLogo from "@/assets/DCHQ-dark.svg";
import { auth } from "@/main";

export default {
  name: "Signin",
  components: {
    Notification
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

    const { userLoggedOut } = this.$route.params;

    if (userLoggedOut) {
      this.hasText = true;
      this.text = "You have logged out!";
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
    getRequestBackgroundandColor() {
      return !this.isDarkMode ? "dark-request" : "light-request";
    },
    srcLogo() {
      return !this.isDarkMode ? darkLogo : lightLogo;
    },
    getForgotLinkColor() {
      return !this.isDarkMode ? "dark-forgot-link" : "light-forgot-link";
    }
  },
  methods: {
    toggleDarkMode() {
      this.$store.dispatch("toggleDarkMode");
    },
    onSubmit() {
      if (this.email && this.password) {
        auth
          // если передать третий аргумент true, то юзера запомнят в куках https://github.com/netlify/gotrue-js/blob/master/src/index.js#L57, также должнен стоять флаг 'setCookie: true' при инициализации
          .login(this.email, this.password, true)
          .then(res => this.$router.replace("/"))
          .catch(console.log);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.light-background {
  background: $light-gray;
}

.dark-background {
  background: $dark-blue;
}

.light-text {
  color: $white;
}

.dark-text {
  color: $black;
}

.light-field {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: $white;

  &::placeholder {
    color: rgba(255, 221, 221, 0.3);
  }
}

.dark-field {
  background: rgba(198, 208, 235, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: $black;

  &::placeholder {
    color: rgba(0, 21, 21, 0.3);
  }
}

.light-request {
  color: rgba(255, 255, 255, 0.3);

  a {
    color: $white;

    &:hover {
      text-decoration: none;
    }
  }
}

.dark-request {
  color: rgba(0, 0, 0, 0.3);

  a {
    color: $black;

    &:hover {
      text-decoration: none;
    }
  }
}

.light-forgot-link {
  color: rgba(255, 255, 255, 0.3);
}

.dark-forgot-link {
  color: rgba(0, 0, 0, 0.3);
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.request {
  position: absolute;
  top: 40px;
  right: 40px;
}

.login {
  width: 400px;
}

h4 {
  margin: 0;
  margin-bottom: 20px;
  font-size: 24px;
  line-height: 34px;
  text-align: center;
  color: #ffffff;
}

.form input {
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 20px;
  padding: 0 20px;
}

.form button {
  width: 100%;
  height: 60px;
  background: #56ccf2;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  text-align: center;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  border: none;
  outline: none;
  margin-bottom: 40px;
  cursor: pointer;
}

.forgot-link {
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
</style>
