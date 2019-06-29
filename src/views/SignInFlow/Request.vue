<template>
  <div
    :class="{'light-background': !isDarkMode, 'dark-background': isDarkMode}"
    class="container"
  >
    <div class="request">
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
      >Request Account</h4>

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
        <button type="submit">Request Account</button>

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
import ThemeSwitch from "@/components/ThemeSwitch";

export default {
  name: "Recover",
  components: {
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
        // https://api.slack.com/
        // Slack API logic
        let slackURL = new URL("https://slack.com/api/chat.postMessage");

        const data = {
          // prettier-ignore
          token: "xoxp-222424334148-222424334308-677427000800-f3143a74783499547025f9927259b94d",
          channel: "hq", // first we need to create a channel by that name on your workspace
          // prettier-ignore
          text: `Email ${this.email} has requested admin access to HQ. Please go to Netlify to invite them.`
        };

        slackURL.search = new URLSearchParams(data);

        fetch(slackURL)
          .then(() => {
            this.$router.push({
              name: "Signin", // name 'Signin', not path '/signin', see router file
              params: {
                userRequestedAccount: true,
                email: this.email
              }
            });
          })
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
}

.request {
  width: 400px;
  text-align: center;
  margin: 0 16px;
}
</style>
