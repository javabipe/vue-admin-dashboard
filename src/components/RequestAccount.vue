<template>
  <transition
    enter-active-class="animated slideInRight"
    name="slide-in-right"
  >
    <div
      :class="getRequestBackgroundandColor"
      class="request"
      v-show="show"
    >
      Don’t have a Design+Code HQ account?
      <router-link to="/request">Request an account</router-link>
    </div>
  </transition>
</template>

<script>
export default {
  name: "RequestAccount",
  data() {
    return {
      show: false
    };
  },
  mounted() {
    this.show = true;
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
    getRequestBackgroundandColor() {
      return !this.isDarkMode ? "dark-request" : "light-request";
    }
  }
};
</script>

<style lang="scss" scoped>
.request {
  position: absolute;
  top: 40px;
  right: 40px;
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
</style>
