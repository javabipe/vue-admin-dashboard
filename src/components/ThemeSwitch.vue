<template>
  <div
    :class="{'light-toggle': !isDarkMode, 'dark-toggle': isDarkMode}"
    @click="toggleDarkMode"
    class="toggle"
  >
    <div
      :class="{'toggle-left': !isDarkMode, 'toggle-right': isDarkMode}"
      class="toggle-switch"
    >
      <img
        src="@/assets/sun.svg"
        v-if="!isDarkMode"
      >
      <img
        src="@/assets/moon.svg"
        v-if="isDarkMode"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "ThemeSwitch",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  methods: {
    toggleDarkMode() {
      this.$store.dispatch("toggleDarkMode");
    }
  }
};
</script>

<style lang="scss" scoped>
.toggle {
  box-sizing: border-box;
  width: 175px;
  border-radius: 10px;
  margin: 50px auto;
  display: flex;
  cursor: pointer;
}

.light-toggle {
  background: linear-gradient(346.78deg, #f7fcfc 0%, #fafcfa 100%);
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: inset 0px 5px 10px rgba(0, 0, 0, 0.1);
}

.dark-toggle {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: inset 0px 5px 10px rgba(255, 255, 255, 0.1);
}

.toggle-switch {
  margin: 2px;
  padding: 15px 35px;
  border-radius: 8px;
}

.toggle-left {
  transform: translateX(0);
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.toggle-right {
  transform: translateX(92%);
  background: #1b233f;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
