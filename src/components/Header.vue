<template>
  <div
    :class="{'nav-light': !isDarkMode, 'nav-dark': isDarkMode}"
    id="nav"
  >
    <div class="nav-1">
      <img
        alt
        src="@/assets/DCHQ-small.svg"
      >
      <router-link
        :class="{'light-nav': !isDarkMode, 'dark-nav': isDarkMode}"
        exact
        to="/"
      >Home</router-link>
      <router-link
        :class="{'light-nav': !isDarkMode, 'dark-nav': isDarkMode}"
        to="/manage"
      >Manage Users</router-link>
      <router-link
        :class="{'light-nav': !isDarkMode, 'dark-nav': isDarkMode}"
        to="/team"
      >Team</router-link>
    </div>

    <a @click="logout">
      Logout
      <img
        alt
        src="@/assets/logout.svg"
      >
    </a>
  </div>
</template>

<script>
import { auth } from "@/main";

export default {
  name: "Header",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
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
.nav-light {
  background: $white;
}

.nav-dark {
  background: $super-dark-blue;
}

#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 15px 15%;

  a {
    font-weight: bold;
    color: $dark-gray;

    &.router-link-exact-active.dark-nav {
      color: $white;
    }

    &.router-link-exact-active.light-nav {
      color: $middle-blue;
    }
  }
}

.nav-1 {
  display: flex;
  align-items: center;

  a {
    margin-right: 20px;
    margin-left: 20px;
  }

  img {
    margin-right: 20px;
  }
}
</style>
